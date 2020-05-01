import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule, SharedModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { CommonModule, DatePipe } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ModalComponent } from './component/modal.component';
import { SanitizeHtmlPipe } from './pipes/sanitizeHtml.pipe';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DateformatPipe } from './pipes/date-format.pipe';
// import { IsValidModelService } from './services/is-valid.service';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { PhoneNumberformatPipe } from './pipes/phone-number-format.pipe';
import { AmountformatPipe } from './pipes/amount-format.pipe';
import { DiscountformatPipe } from './pipes/discount-format.pipe';
import { PercentformatPipe } from './pipes/percent-format.pipe';
import { AutofocusDirective } from './directives/auto-focus-directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { UploadModule } from '@progress/kendo-angular-upload';

@NgModule({
  declarations: [
    ModalComponent,
    SanitizeHtmlPipe,
    DateformatPipe,
    PhoneNumberformatPipe,
    AmountformatPipe,
    DiscountformatPipe,
    PercentformatPipe,
    AutofocusDirective
    // IsValidModelService
    // AccountFormatePipe,
    // CurrencyFormatePipe
  ],
  imports: [
    CommonModule,
    // CKEditorModule,
    NotificationModule,
    BrowserAnimationsModule,
    ButtonsModule,
    ChartsModule,
    DateInputsModule,
    DialogsModule,
    DropDownsModule,
    ExcelExportModule,
    GridModule,
    InputsModule,
    LayoutModule,
    PDFExportModule,
    ScrollViewModule,
    SortableModule,
    TooltipModule,
    UploadModule,
    HttpClientModule,
    // IsValidModelService
  ],
  exports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DialogModule,
    GridModule,
    LayoutModule,
    SharedModule,
    SortableModule,
    DropDownsModule,
    // CKEditorModule,
    SanitizeHtmlPipe,
    DateformatPipe,
    DateInputsModule,
    PhoneNumberformatPipe,
    AmountformatPipe,
    DiscountformatPipe,
    PercentformatPipe,
    AutofocusDirective,
    // IsValidModelService
    // AccountFormatePipe,
    // CurrencyFormatePipe
  ],
  entryComponents: [
    ModalComponent,
  ],
  providers: [
    DatePipe,
  ]
})


export class SBSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SBSharedModule,
      providers: []
    };
  }
}
