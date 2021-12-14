import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { GetInvoiceComponent } from './invoice/get-invoice/get-invoice.component';
import { UpdateInvoiceComponent } from './invoice/update-invoice/update-invoice.component';

const routes: Routes = [

  { path: '', component: GetInvoiceComponent },
  { path: 'addInvoice', component: AddInvoiceComponent },
  { path: 'updateInvoice/:id', component: UpdateInvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
