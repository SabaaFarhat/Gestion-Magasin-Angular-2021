import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/models/Invoices';
import { InvoiceService } from 'src/app/service/invoice/invoice.service';
import { GetInvoiceComponent } from '../get-invoice/get-invoice.component';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
})
export class AddInvoiceComponent implements OnInit {
  @ViewChild(GetInvoiceComponent) c!: GetInvoiceComponent;

  invoice!: Invoice[];
  InvoiceForm = new FormGroup({
    billAmount: new FormControl(''),
    discountAmount: new FormControl(''),
    dateBill: new FormControl(''),
    Status: new FormControl(''),
  });
  constructor(private service: InvoiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.fetchInvoices().subscribe(
      (t) => {
        this.invoice = t;
      },
      (error) => {
        console.log(error.status);
      }
    );
  }
  GetMaxId(t: Invoice[]) {
    let Max = 0;
    let i = 0;
    let n = t.length;

    while (i < n) {
      if (t[i].idInvoice > Max) {
        Max = t[i].idInvoice;
      } else {
        i++;
      }
    }
    console.log('Max : ' + Max);
    return Max + Number(1);
  }

  SaveInvoice(data: Invoice) {
    data.idInvoice = this.GetMaxId(this.invoice);
    console.log(data.idInvoice);
    this.service.addInvoice(data).subscribe(
      () => {},
      (error) => {
        console.log(error);
      }
    );
    this.router.navigateByUrl('invoice');
  }
}
