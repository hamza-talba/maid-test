import { AfterViewInit,   Component } from '@angular/core';
import {  Observable } from 'rxjs';

import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit {
  isLoading$: Observable<boolean>
  constructor(public loadingService:LoadingService,){
   }

   ngAfterViewInit(){
      this.isLoading$ = this.loadingService.isloading$
   }
 }
