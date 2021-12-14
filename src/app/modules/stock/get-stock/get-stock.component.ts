import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImagesStock } from 'src/app/models/ImagesStock';
import { Stock } from 'src/app/models/Stock';
import { StockService } from 'src/app/service/stock/stock.service';
import { AddStockComponent } from '../add-stock/add-stock.component';
import { UpdateStockComponent } from '../update-stock/update-stock.component';

@Component({
  selector: 'app-get-stock',
  templateUrl: './get-stock.component.html',
  styleUrls: ['./get-stock.component.css'],
})
export class GetStockComponent implements OnInit, AfterViewInit {
  @ViewChild(AddStockComponent) c!: AddStockComponent;
  @ViewChild(UpdateStockComponent) update!: UpdateStockComponent;
  stockAdd!: Stock;
  stockUpdate!: Stock;



  isShown: boolean = false ; // hidden by default
  closeResult: string = '';
  Fmodel: any;
  ListStock: any;
  
    // stock = new Stock();
  // id = this.ac.snapshot.params.id;
  stocks !: Stock[];
  images !: ImagesStock[];
  searchValue!: string;
  p = 1;

  constructor(private service: StockService, private router: Router, private modalService: NgbModal, private ac: ActivatedRoute,) {}

  ngAfterViewInit(): void {
    //this.c.GetMaxId;
    //throw new Error('Method not implemented viewChild.');
  }

  ngOnInit(): void {
    this.GetAllStock();

  }

  GetAllStock() {
    //console.log('getallStock');
    this.service.getAll().subscribe(
      (t) => {
        console.log(t);
        this.ListStock = t;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Delete(id: number) {
    this.service.deleteStock(id).subscribe(
      () => {},
      (error) => {
        console.log(error);
      }
    );
    this.reloadPage();
    // console.log('----------------------------');
    // this.ListStock.splice(this.ListStock.length);
    // this.GetAllStock();
  }

  UpdateStock(id: number) {
    //this.isShown = ! this.isShown;
    this.router.navigate(['stock/updateStock', id]);
  }

  DetailStock(id: number) {
    //this.isShown = ! this.isShown;
    this.router.navigate(['stock/detailsStock', id]);
  }


  addRequest(t: Stock) {
    console.log(t);
    this.GetAllStock();
    this.reloadPage();
    console.log('++++++++++++++++++++++');
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

//   openDetails(targetModal: any, stock: Stock) {
//     this.modalService.open(targetModal, {
//      centered: true,
//      backdrop: 'static',
//      size: 'lg'
//    });
//     document.getElementById('libelleStock')?.setAttribute('value', stock.libelleStock);
//  }

//  openUpdate(targetModal: any, stock: Stock) {
//   this.modalService.open(targetModal, {
//    centered: true,
//    backdrop: 'static',
//    size: 'lg'
//  });

//     this.Fmodel.patchValue( {
//       id: stock.idStock,
//       libelle: stock.libelleStock,
//       qteMin: stock.qteMin,
//       qteStock: stock.qteStock
//     });
//   }

getStockImages() {

}


  reloadPage() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
