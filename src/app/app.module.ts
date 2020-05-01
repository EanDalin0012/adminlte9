import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './loging/loging.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import { MLayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutBlankComponent,
    LogingComponent,
  ],
  imports: [
    BrowserModule,
    MLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
