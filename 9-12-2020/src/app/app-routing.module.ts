import { AuthGuardGuard } from './auth-guard.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'second' , pathMatch:'full'},
  {path:'zero' ,component: HomePageComponent,canActivate : [AuthGuardGuard] },
  {path:'second' ,component: LoginComponent},
  {path:'third' ,component: RegisterComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
