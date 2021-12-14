import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from './add-stock/add-stock.component';
import { DetailsStockComponent } from './details-stock/details-stock.component';
import { GetStockComponent } from './get-stock/get-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';

const routes: Routes = [
  { path: '', component: GetStockComponent },
  //{ path: 'addStock', component: AddStockComponent },
  { path: 'updateStock/:id', component: UpdateStockComponent },
  { path: 'detailsStock/:id', component: DetailsStockComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
