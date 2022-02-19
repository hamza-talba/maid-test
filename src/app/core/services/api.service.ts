import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPagination } from '../models/interfaces/pagination.interface';
import { IApiDataResponse } from '../models/interfaces/ApiResponse.interface';
import { User } from '../models/classes/User.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = environment.apiUrl
  endpoint:string="users"
  constructor(private http:HttpClient) { }

  getData(pagination:IPagination):Observable<IApiDataResponse<User[]>>{
     return this.http.get<IApiDataResponse<User[]>>(this.url + this.endpoint,
      {
         params:{page:pagination.page.toString(),per_page:pagination.per_page.toString()}}
      )
  }

  getDataById(id:string):Observable<IApiDataResponse<User>>{
    return this.http.get<IApiDataResponse<User>>(`${this.url + this.endpoint}/${id.toString()}`)
  }
}
