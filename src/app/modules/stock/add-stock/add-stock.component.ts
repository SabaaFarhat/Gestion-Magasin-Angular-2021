import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models/Stock';
import { StockService } from 'src/app/service/stock/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  @Input() stocks!: Stock; //composant fils peut recevoir des informations depuis son composant parent
  @Output() notif= new EventEmitter<Stock>();
  //@ViewChild(GetStockComponent) c!: GetStockComponent;

  stock!: Stock[];
  // stockForm = new FormGroup({
  //   qteStock: new FormControl(''),
  //   qteMin: new FormControl(''),
  //   libelleStock: new FormControl(''),
  // });
  stockForm=this.fb.group({
    qteStock:['', [Validators.required]],
    qteMin:['', [Validators.required]],
    libelleStock:['', [Validators.required, Validators.minLength(3)]],
  })

  constructor(private service: StockService, private router: Router, private fb:FormBuilder) {}
  

  ngOnInit(): void {

    this.service.fetchStocks().subscribe(
      (t) => {
        this.stock = t;
      },
      (error) => {
        console.log(error.status);
      }
    );
    this.router.navigateByUrl('stock');

    //this.fileInfos = this.service.getFiles();
  }
  GetMaxId(t: Stock[]) {
    let Max = 0;
    let i = 0;
    let n = t.length;

    while (i < n) {
      if (t[i].idStock > Max) {
        Max = t[i].idStock;
      } else {
        i++;
      }
    }
    console.log('Max : ' + Max);
    return Max + Number(1);
  }

  SaveStock(data: Stock) {
    data.idStock = this.GetMaxId(this.stock);
    console.log(data.idStock);
    this.service.addStock(data).subscribe(
      () => {
        this.ngOnInit(); 
        this.notif.emit(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigateByUrl('stock');
  }

  get qteStock(){
    return this.stockForm.get('qteStock')
  }

  get qteMin(){
    return this.stockForm.get('qteMin')
  }

  get libelleStock(){
    return this.stockForm.get('libelleStock')
  }

}
