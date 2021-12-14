import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { UpdateInvoiceComponent } from './invoice/update-invoice/update-invoice.component';
import { DeleteInvoiceComponent } from './invoice/delete-invoice/delete-invoice.component';
import { GetInvoiceComponent } from './invoice/get-invoice/get-invoice.component';

@NgModule({
  declarations: [
    AddInvoiceComponent,
    UpdateInvoiceComponent,
    DeleteInvoiceComponent,
    GetInvoiceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InvoiceRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class InvoiceModule {}
