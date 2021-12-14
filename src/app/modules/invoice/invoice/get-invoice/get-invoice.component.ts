import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { InvoiceService } from 'src/app/service/invoice/invoice.service';
import { Invoice } from 'src/app/models/Invoices';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-get-invoice',
  templateUrl: './get-invoice.component.html',
  styleUrls: ['./get-invoice.component.css'],
})
export class GetInvoiceComponent implements OnInit {
  //@Output() notif = new EventEmitter<Invoice>(); // from angular/ core

  constructor(private service: InvoiceService, private router: Router) {}
  ListInvoice!: Invoice[];

  ngOnInit(): void {
    console.log('hello');
    this.GetAllIvoice();
  }
  GetAllIvoice() {
    console.log('getallInvoices');
    this.service.fetchInvoices().subscribe(
      (t) => {
        console.log(t);
        console.log('++++');
        this.ListInvoice = t;
      },
      (error) => {
        console.log(error);
      }
    );
    console.log('        console.log(this.ListInvoice)');
    console.log(this.ListInvoice);
  }

  Delete(id: number) {
    this.service.deleteInvoice(id).subscribe(
      () => {},
      (error) => {
        console.log(error);
      }
    );
    console.log('----------------------------');
    this.GetAllIvoice();
  }

  UpdateInvoice(id: number) {
    this.router.navigate(['invoice/updateInvoice', id]);
  }

  addInvoice() {
    this.router.navigate(['invoice/addInvoice']);
  }
}
