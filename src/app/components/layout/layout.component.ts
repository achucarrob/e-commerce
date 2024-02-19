import { Component} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  // @Input({required: true}) img:string = '';
  // @Input({required: true}) price:number = 0;
  // @Input({required: true}) title:string = '';

  cart: any[] = [];

  apiResponse = {
    products: [
      { id: 1, title: "Ron", price: 2500000, img: "https://www.maahsa.com.py/storage/sku/don-onofre-bebidas-alimentos-ron-profesional-1-1-1684509239.png" },
      { id: 2, title: "Ron", price: 3000000, img: "https://www.maahsa.com.py/storage/sku/don-onofre-bebidas-alimentos-ron-profesional-1-1-1684509239.png" },
      { id: 3, title: "Ron", price: 785000, img: "https://www.maahsa.com.py/storage/sku/don-onofre-bebidas-alimentos-ron-profesional-1-1-1684509239.png" },
      { id: 4, title: "Ron", price: 1200000, img: "https://www.maahsa.com.py/storage/sku/don-onofre-bebidas-alimentos-ron-profesional-1-1-1684509239.png" },
      { id: 5, title: "Ron", price: 6666666, img: "https://www.maahsa.com.py/storage/sku/don-onofre-bebidas-alimentos-ron-profesional-1-1-1684509239.png" },
      { id: 6, title: "Ron", price: 9999999, img: "https://www.maahsa.com.py/storage/sku/don-onofre-bebidas-alimentos-ron-profesional-1-1-1684509239.png" }
    ]
  };


  addToCart(title: string, price: number, img: string){
    this.cart.push({ title: title, price: price, img: img });
    // console.log("Carrito", this.cart)
  }

}
