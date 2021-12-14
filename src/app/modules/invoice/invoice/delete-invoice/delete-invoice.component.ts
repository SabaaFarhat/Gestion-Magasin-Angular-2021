import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/service/invoice/invoice.service';

@Component({
  selector: 'app-delete-invoice',
  templateUrl: './delete-invoice.component.html',
  styleUrls: ['./delete-invoice.component.css'],
})
export class DeleteInvoiceComponent implements OnInit {
  constructor(private service: InvoiceService) {}

  ngOnInit(): void {}
  Delete(id: number) {
    console.log('id : ' + id);
    this.service.deleteInvoice(id);
  }
}
