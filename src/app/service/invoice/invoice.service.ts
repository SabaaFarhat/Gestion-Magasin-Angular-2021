import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from 'src/app/models/Invoices';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  baseurl = environment.url;
  constructor(private http: HttpClient) {}

  // fetchInvoices(): Observable<Invoice[]> {
  //   return this.http.get<Invoice[]>(this.baseurl + 'Invoices');
  // }

  // getInvoices(data: any) {
  //   return this.http.get(this.baseurl + 'Invoices');
  // }

  // fetchInvoicesById(id: any): Observable<Invoice> {
  //   return this.http.get<Invoice>(this.baseurl + 'Invoice/' + id);
  // }

  // addInvoice(data: Invoice) {
  //   return this.http.post(this.baseurl + 'Invoice', data);
  // }

  // UpdatInvoice(data: Invoice): Observable<Invoice> {
  //   return this.http.put<Invoice>(
  //     this.baseurl + 'Invoice/' + data.idInvoice,
  //     data
  //   );
  // }

  // deleteInvoices(id: any) {
  //   return this.http.delete(this.baseurl + 'Invoices/' + id);
  // }

  fetchInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.baseurl + 'invoice');
  }
  
  fetchInvoicesById(id: any): Observable<Invoice> {
    return this.http.get<Invoice>(this.baseurl + 'Invoice/' + id);
  }

  addInvoice(data: Invoice) {
    return this.http.post(this.baseurl + 'Invoice', data);
  }

  deleteInvoice(id: any) {
    console.log(id);
    return this.http.delete(this.baseurl + 'Invoice/' + id);
  }
  UpdatInvoice(data: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(
      this.baseurl + 'Invoice/' + data.idInvoice,
      data
    );
  }
}
