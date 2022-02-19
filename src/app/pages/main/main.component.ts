import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { tap, map } from 'rxjs/operators';
import { IPagination } from 'src/app/core/models/interfaces/pagination.interface';
import { environment } from 'src/environments/environment';
import { IApiDataResponse } from '../../core/models/interfaces/ApiResponse.interface';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data$:Observable<any>
  pagination:IPagination={
    page:1,
    per_page:environment.per_page,
    total:0,
    total_pages:0
  }
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.data$ = this.getData()
  }

  paginate(pageEvent:PageEvent){
     this.pagination.page = pageEvent.pageIndex+1
     this.pagination.per_page = pageEvent.pageSize
     this.data$ = this.getData()
  }

  getData():Observable<any>{
   return this.apiService.getData(this.pagination).pipe(
      tap(({page,per_page,total,total_pages}:IApiDataResponse<any>)=> this.pagination = {page,per_page,total,total_pages}),
      map((res:IApiDataResponse<any>)=> res.data)
    )
  }
}
