import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { Register1000Component } from './register1000/register1000.component';
import { Register1100Component } from './register1100/register1100.component';
import { Register1200Component } from './register1200/register1200.component';
import { Register2200Component } from './register2200/register2200.component';
import { Register2100Component } from './register2100/register2100.component';
import { Register2000Component } from './register2000/register2000.component';
import { Register3000Component } from './register3000/register3000.component';
import { Register3100Component } from './register3100/register3100.component';
import { Register3200Component } from './register3200/register3200.component';
import { Register4200Component } from './register4200/register4200.component';
import { Register4100Component } from './register4100/register4100.component';
import { Register4000Component } from './register4000/register4000.component';
import { Register5000Component } from './register5000/register5000.component';
import { Register5100Component } from './register5100/register5100.component';
import { Register5200Component } from './register5200/register5200.component';



@NgModule({
  declarations: [RegisterComponent, Register1000Component, Register1100Component, Register1200Component, Register2200Component, Register2100Component, Register2000Component, Register3000Component, Register3100Component, Register3200Component, Register4200Component, Register4100Component, Register4000Component, Register5000Component, Register5100Component, Register5200Component],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
