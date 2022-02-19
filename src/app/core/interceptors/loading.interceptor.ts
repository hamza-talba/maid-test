import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { finalize,  delay } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(public loadingService: LoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.loadingService.show();
      return next.handle(req).pipe(
          delay(3000), //Simulating long http request to show progress bar
          finalize(() => this.loadingService.hide())
      );
  }
}
