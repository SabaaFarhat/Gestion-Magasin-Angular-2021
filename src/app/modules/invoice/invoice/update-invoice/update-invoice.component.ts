import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/models/Invoices';
import { InvoiceService } from 'src/app/service/invoice/invoice.service';

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css'],
})
export class UpdateInvoiceComponent implements OnInit {
  @Output() notif = new EventEmitter<Invoice>(); // from angular/ core
  constructor(
    private ac: ActivatedRoute,
    private service: InvoiceService,
    private router: Router
  ) {}

  invoice = new Invoice();
  id = this.ac.snapshot.params.id;

  ngOnInit(): void {
    this.getInvoice();
  }

  getInvoice() {
    this.service.fetchInvoicesById(this.id).subscribe(
      (res: Invoice) => {
        this.invoice = res;
        console.log(res.idInvoice);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  UpdateInvoice(data: Invoice) {
    data.idInvoice = this.id;
    this.service.UpdatInvoice(data).subscribe(
      () => {},
      (error) => {
        console.log(error);
      }
    );
    this.router.navigateByUrl('invoice');
  }
}
