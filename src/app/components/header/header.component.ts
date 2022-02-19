 import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { startWith, map, debounceTime, distinctUntilChanged, switchMap, tap, catchError, filter } from 'rxjs/operators';
import { User } from 'src/app/core/models/classes/User.model';
import { ApiService } from '../../core/services/api.service';
import { IApiDataResponse } from '../../core/models/interfaces/ApiResponse.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
  stateCtrl = new FormControl();
  inputSubscription:Subscription
  filterdUsers:User = new User()

  constructor(private apiService:ApiService) {
    this.inputSubscription= this.stateCtrl.valueChanges.pipe(
      debounceTime(400),
      filter(term => term != null),
      distinctUntilChanged(),
       switchMap(term => this.searchEntries(term)),
      map((res:IApiDataResponse<User>) => res.data)
    ).subscribe((user:User) => this.filterdUsers = user)
  }

  ngOnInit(): void {

  }

  searchEntries(term:string) {
    if(term){
      return this.apiService.getDataById(term).pipe(catchError(()=>of(new User())))
    }else{
      of(new User())
    }
  }

  clear(){
    this.stateCtrl.reset()
  }

  ngOnDestroy(): void {
      this.inputSubscription.unsubscribe()
  }
}


