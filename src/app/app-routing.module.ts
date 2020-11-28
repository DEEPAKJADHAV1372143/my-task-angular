import { DashbordComponent } from './dashbord/dashbord.component';
import { WebsiteComponent } from './website/website.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',
  component:DashbordComponent},
  {path:'dash',
  component:DashbordComponent},
  {path:'web',
  component:WebsiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
