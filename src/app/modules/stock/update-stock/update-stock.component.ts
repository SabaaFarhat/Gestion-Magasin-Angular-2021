import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/models/Stock';
import { StockService } from 'src/app/service/stock/stock.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css'],
})
export class UpdateStockComponent implements OnInit {
  @Input() stocksU!: Stock; //composant fils peut recevoir des informations depuis son composant parent
  @Output() notif= new EventEmitter<Stock>();
 

  constructor(private ac: ActivatedRoute,
    private service: StockService,
    private router: Router) { }

  stock !: Stock;
  id: number = this.ac.snapshot.params.id;

  ngOnInit(): void {
    this.getStock();
  }

  getStock() {
    this.service.fetchStocksById(this.id).subscribe(
      (res: Stock) => {
        this.stock = res;
        console.log(res.idStock);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  UpdateStock(data: Stock) {
    data = this.stock;
    console.log(data.idStock);
    this.service.UpdateStock(data).subscribe(
      (next) => { 
        this.notif.emit(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigateByUrl('stock');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    throw new Error('Method not implemented for update.');
  }

  addFile(e:Event){
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;
    console.log(files[0])
    this.service.uploadFile(files[0],this.stock.idStock).subscribe((d) => {
      console.log(this.stock.idStock);
      this.reloadPage();
    },
      (error) => {
        console.log(error)
      })
  }

  reloadPage() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }



}
