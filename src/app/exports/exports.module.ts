import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportComponent } from './export/export.component';
import { Export1000Component } from './export1000/export1000.component';
import { Export1100Component } from './export1100/export1100.component';
import { Export1200Component } from './export1200/export1200.component';
import { Export2200Component } from './export2200/export2200.component';
import { Export2100Component } from './export2100/export2100.component';
import { Export2000Component } from './export2000/export2000.component';
import { ExportsRoutingModule } from './exports-routing.module';



@NgModule({
  declarations: [
    ExportComponent,
    Export1000Component,
    Export1100Component,
    Export1200Component,
    Export2200Component,
    Export2100Component,
    Export2000Component
  ],
  imports: [
    CommonModule,
    ExportsRoutingModule
  ]
})
export class ExportsModule { }
