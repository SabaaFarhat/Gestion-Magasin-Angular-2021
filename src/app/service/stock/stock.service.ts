import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagesStock } from 'src/app/models/ImagesStock';
import { Stock } from 'src/app/models/Stock';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root',
})
export class StockService {
  baseurl = environment.url;
  constructor(private http: HttpClient) {}

  fetchStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseurl + 'stock');
  }

  fetchStocksById(id: any): Observable<Stock> {
    return this.http.get<Stock>(this.baseurl + 'stock/getStockById/' + id);
  }

  addStock(data: Stock) {
    return this.http.post(this.baseurl + 'stock/addStock', data);
  }

  deleteStock(id: any) {
    console.log(id);
    return this.http.delete(this.baseurl + 'delete-by-state-stock/' + id);
  }

  UpdateStock(data: Stock): Observable<Stock> {
    return this.http.put<Stock>(
      this.baseurl + 'stock/modifyStock/' + data.idStock,
      data
    );
  }

  getAllImages(id: number): Observable<ImagesStock[]> {
    return this.http.get<ImagesStock[]>(
      'http://localhost:8088/get-image-by-stock/' + id
    );
  }

  getAll(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseurl + 'retrieve-all-stock-true');
  }


  uploadFile(file:File,id:number):Observable<ImagesStock>{
    let headers = new HttpHeaders();
    headers.set('Content-Type', '');
    headers.set('Accept', "multipart/form-data");
    let params = new HttpParams();
    const formData: FormData = new FormData();
    formData.append('file',file);
    formData.append('id',id.toString());
    return this.http.post<ImagesStock>("http://localhost:8088/add-image-stock/",formData,{ params, headers });
  }
}
