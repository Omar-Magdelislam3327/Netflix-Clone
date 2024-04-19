import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GetOneComponent } from './get-one/get-one.component';
import { GetTwoComponent } from './get-two/get-two.component';
import { ChooseOneComponent } from './choose-one/choose-one.component';
import { ChooseTwoComponent } from './choose-two/choose-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    GetOneComponent,
    GetTwoComponent,
    ChooseOneComponent,
    ChooseTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
