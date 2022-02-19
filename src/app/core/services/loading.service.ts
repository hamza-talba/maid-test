import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading = new BehaviorSubject<boolean>(false);
  isloading$:Observable<boolean> = this.isLoading.asObservable()
  show() {
      this.isLoading.next(true);
  }
  hide() {
      this.isLoading.next(false);
  }
}
