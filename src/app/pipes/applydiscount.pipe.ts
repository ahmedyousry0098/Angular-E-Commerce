import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applydiscount'
})
export class ApplydiscountPipe implements PipeTransform {

  transform(originalPrice: number, discount: number): number {
    const finalPrice = originalPrice * (100-(discount))/100
    return finalPrice;
  }

}
