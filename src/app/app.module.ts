import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header2Component } from './header2/header2.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { StockModule } from './modules/stock/stock.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RayonModule } from './modules/rayon/rayon.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageContentComponent } from './pages/page-content/page-content.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  declarations: [
    AppComponent, 
    Header2Component, 
    NotFoundPageComponent, 
    PageContentComponent, 
    HeaderComponent, 
    SideBarComponent, 
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockModule,
    InvoiceModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RayonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
