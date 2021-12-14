import { Pipe, PipeTransform } from '@angular/core';
import { Stock } from 'src/app/models/Stock';

@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(stocks: Stock[], searchValue: string): Stock[] {
    if (!stocks || !searchValue) {
      return stocks;
    }
    return stocks.filter((stock) =>
      stock.libelleStock
        .toString()
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );
  }
}
