import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataRowComponent } from './components/data-row.component';
import { DataTableComponent } from './components/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DynamicDataTableComponent } from './components/dynamic-data-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DataRowComponent,
    DataTableComponent,
    DynamicDataTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
