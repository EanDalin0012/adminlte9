import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationModule } from '@progress/kendo-angular-notification';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import { MLayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { LogingComponent } from './loging/loging.component';
import { SBSharedModule } from './shared/shared.module';

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
    AppRoutingModule,
    SBSharedModule.forRoot(),
    NotificationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
