import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { DetailsComponent } from './pages/details/details.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent
  },
  {
    path:":id",
    component:DetailsComponent
  },
  {
    path:"**",
    redirectTo:""
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
