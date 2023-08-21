import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllDetailsComponent } from './all-details/all-details.component';
import { LoginformComponent } from './loginform/loginform.component';

const routes: Routes = [
  {path:'',component:LoginformComponent},
  {path:'details',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
