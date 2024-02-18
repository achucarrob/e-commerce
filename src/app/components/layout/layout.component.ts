import { Component} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  // @Input({required: true}) img:string = '';
  // @Input({required: true}) price:number = 0;
  // @Input({required: true}) title:string = '';

  apiResponse = {
    products: [
      { title: "Ron", price: 2500000 },
      { title: "Ron", price: 3000000 },
      { title: "Ron", price: 785000 },
      { title: "Ron", price: 1200000 },
      { title: "Ron", price: 6666666 },
      { title: "Ron", price: 9999999}
    ]
  };

  addToCart(title: string, price: number){
    console.log("Titulo", title, "Precio", price)
  }
}
