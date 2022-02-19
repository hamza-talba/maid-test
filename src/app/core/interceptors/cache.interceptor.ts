import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs"
import { share, tap } from "rxjs/operators"

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  /*There is many solutions to cache http requests but I have chose this one cause the project is small and simple*/

  private cache: Map<string, HttpResponse<any>> = new Map()
  constructor(){
    setInterval(()=>{
      this.cache.clear()
    },1800000)
    //clear cache every 30 minutes
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(req.method !== "GET") {
        return next.handle(req)
    }
    const cachedResponse: HttpResponse<any> = this.cache.get(`${req.url}/${req.params}`)
    if(cachedResponse) {

      return of(cachedResponse.clone())
    }else {

       return next.handle(req).pipe(
            tap(response => {
                if(response instanceof HttpResponse) {
                   this.cache.set(`${req.url}/${req.params}`, response.clone())
                }
             }),
            share()
          )
        }
  }
}
