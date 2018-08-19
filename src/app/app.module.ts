import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EvDateRangePickerComponent } from './ev-date-range-picker/ev-date-range-picker.component';
import { EvPagedDataTableComponent } from './ev-paged-data-table/ev-paged-data-table.component';
import { EvPagedDataControlComponent } from './ev-paged-data-control/ev-paged-data-control.component';
import { EvPaginatedTableComponent } from './ev-paginated-table/ev-paginated-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EvDateRangePickerComponent,
    EvPagedDataTableComponent,
    EvPagedDataControlComponent,
    EvPaginatedTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
