import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Home1000Component } from './home1000/home1000.component';
import { HomeRoutingModule } from './home-routing.module';
import { Home1100Component } from './home1100/home1100.component';
import { Home1200Component } from './home1200/home1200.component';
import { Home2200Component } from './home2200/home2200.component';
import { Home2100Component } from './home2100/home2100.component';
import { Home2000Component } from './home2000/home2000.component';



@NgModule({
  declarations: [
    HomeComponent,
    Home1000Component,
    Home1100Component,
    Home1200Component,
    Home2200Component,
    Home2100Component,
    Home2000Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
  constructor() {
    console.log('home module worke');
  }
}
