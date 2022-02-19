import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
 import { switchMap, map } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';
import { User } from '../../core/models/classes/User.model';
import { IApiDataResponse } from '../../core/models/interfaces/ApiResponse.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user:User = new User()

  constructor(private route:ActivatedRoute,private apiService:ApiService) { }

  ngOnInit() {

    this.route.params.pipe(
      switchMap((params:Params)=>{
        return this.apiService.getDataById(params.id)
      }),
      map((res:IApiDataResponse<User>) => res.data)
    ).subscribe((res:User)=> this.user = res)
   }

}
