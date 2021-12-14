import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from '../models/Produit';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {
baseurl = environment.url;
  constructor( private http:HttpClient) { }

  fetchProducts():Observable<Produit[]>{
    return this.http.get<Produit[]>(this.baseurl+"Products");
  }

  addProducts(data:any){
    return this.http.post(this.baseurl+"Products", data)
  }
}
