import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sign1000Component } from './sign1000/sign1000.component';
import { SignComponent } from './sign/sign.component';
import { SignRoutingModule } from './sign-routing.module';



@NgModule({
  declarations: [Sign1000Component, SignComponent],
  imports: [
    CommonModule,
    SignRoutingModule
  ]
})
export class SignModule {
  constructor() {
    console.log('home module worke');
  }
}
