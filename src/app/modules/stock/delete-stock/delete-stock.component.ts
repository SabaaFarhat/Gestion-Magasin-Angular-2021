import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models/Stock';
import { StockService } from 'src/app/service/stock/stock.service';
import { GetStockComponent } from '../get-stock/get-stock.component';

@Component({
  selector: 'app-delete-stock',
  templateUrl: './delete-stock.component.html',
  styleUrls: ['./delete-stock.component.css']
})
export class DeleteStockComponent implements OnChanges {
  @Input() stocks!: Stock; //composant fils peut recevoir des informations depuis son composant parent
  @Output() notif= new EventEmitter<Stock>();
  //@ViewChild(GetStockComponent) c!: GetStockComponent;
  constructor(private service: StockService, private router: Router) {}
  

  //ngOnInit(): void {}
  Delete(id: number) {
    console.log('id : ' + id);
    this.service.deleteStock(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log (changes);
    throw new Error('Method not implemented for delete.');
  }


}
