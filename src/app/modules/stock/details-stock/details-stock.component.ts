import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/models/Stock';
import { StockService } from 'src/app/service/stock/stock.service';

@Component({
  selector: 'app-details-stock',
  templateUrl: './details-stock.component.html',
  styleUrls: ['./details-stock.component.css']
})
export class DetailsStockComponent implements OnInit {

  id!:number;
  stock !:Stock;
  isLoading = true;
 
  constructor(private route:ActivatedRoute, private service:StockService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.GetAllProduit();
  }
  GetAllProduit(){
    this.service.fetchStocksById(this.id).subscribe((res:any)=>{
      console.log(res);
  
      this.stock = res;
  
      this.isLoading = false;
      
    },
    (error)=>{
      console.log(error)
    
    });
  }
   
    // Delete(id:number)
    // {
    //   this.service.deleteStock(id).subscribe(()=>{},(error)=>{console.log(error)});
    //   console.log("----------------------------")
    //   this.router.navigateByUrl('/produit/ProduitHome/getParent');
    // }
    retour()
    {
      this.router.navigate(['stock'])
    }
    
}
