import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutBlankComponent } from './layout-blank/layout-blank.component';
import { SettingsComponent } from './settings/settings.component';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SettingsComponent,
    SideNavComponent],
  imports: [
    CommonModule
  ]
})
export class MLayoutModule { }
