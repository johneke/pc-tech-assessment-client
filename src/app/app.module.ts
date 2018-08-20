import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { EvDateRangePickerComponent } from './ev-date-range-picker/ev-date-range-picker.component';
import { EvPagedDataTableComponent } from './ev-paged-data-table/ev-paged-data-table.component';
import { EvPagedDataControlComponent } from './ev-paged-data-control/ev-paged-data-control.component';
import { EvPaginatedTableComponent } from './ev-paginated-table/ev-paginated-table.component';

import { EvHttpClientService } from './ev-http-client.service';
import { EvPagedDataSizeComponent } from './ev-paged-data-size/ev-paged-data-size.component';
import { EvDetailComponent } from './ev-detail/ev-detail.component';
import { EvAllComponent } from './ev-all/ev-all.component';

@NgModule({
  declarations: [
    AppComponent,
    EvDateRangePickerComponent,
    EvPagedDataTableComponent,
    EvPagedDataControlComponent,
    EvPaginatedTableComponent,
    EvPagedDataSizeComponent,
    EvDetailComponent,
    EvAllComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [EvHttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
