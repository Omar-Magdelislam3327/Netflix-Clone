import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { GetOneComponent } from './get-one/get-one.component';
import { GetTwoComponent } from './get-two/get-two.component';
import { ChooseOneComponent } from './choose-one/choose-one.component';
import { ChooseTwoComponent } from './choose-two/choose-two.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'sign-in', component:SignInComponent },
  { path:'get-1', component:GetOneComponent },
  { path:'get-2', component:GetTwoComponent },
  { path:'choose-1' , component:ChooseOneComponent},
  { path:'choose-2' , component:ChooseTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
