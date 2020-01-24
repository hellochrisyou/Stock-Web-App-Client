import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';
import { LoginLogicComponent } from '@home/login/login.component';
import { SignupLogicComponent } from '@home/signup/signup.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent, 
    LoginLogicComponent, 
    SignupLogicComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    LoginLogicComponent, 
    SignupLogicComponent
  ]
})
export class HomeModule { }