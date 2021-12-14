import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //redirection vers login par defaut
  // { path: 'addProduct', component: AddProductTDComponent },
  // { path: 'get', component: MainProductComponent },
  // { path: 'mainProvider', component: MainProviderComponent },
  {
    path: 'invoice',
    loadChildren: () =>
      import('./modules/invoice/invoice.module').then((m) => m.InvoiceModule),
  },
  {
    path: 'stock',
    loadChildren: () =>
      import('./modules/stock/stock.module').then((m) => m.StockModule),
  },
  { path: '**', component: NotFoundPageComponent }, //toujours la dernière route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
