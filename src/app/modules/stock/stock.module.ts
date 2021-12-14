import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { AddStockComponent } from './add-stock/add-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { DeleteStockComponent } from './delete-stock/delete-stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { SearchfilterPipe } from './searchfilter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { GetStockComponent } from './get-stock/get-stock.component';
import { DetailsStockComponent } from './details-stock/details-stock.component';

@NgModule({
  declarations: [
    AddStockComponent,
    UpdateStockComponent,
    DeleteStockComponent,
    SearchfilterPipe,
    GetStockComponent,
    DetailsStockComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    WavesModule,
    NgxPaginationModule
  ],
})
export class StockModule {}
