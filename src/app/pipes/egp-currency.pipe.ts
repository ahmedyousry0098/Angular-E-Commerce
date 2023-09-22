import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egpCurrency'
})
export class EgpCurrencyPipe implements PipeTransform {

  transform(money:number, oneTo: number): number {
    return money*oneTo
  }

}
