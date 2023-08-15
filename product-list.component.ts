import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  addToCart: number = 0;
  name: string = 'Johne Doe';
  product = {
    name: 'iPhone',
    price: 789,
    color: 'gold',
    discount: 8.5,
    inStock: 7,
    pImage: 'assets/images/iphone.png'
  }


  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100);
  }

  onNameChanges(event: any) {
    this.name = event.target.value;
  }

  incrementValue() {
    if(this.addToCart != this.product.inStock) {
      this.addToCart++;
    }
  }

  decrementValue() {
    if(this.addToCart != 0) {
      this.addToCart--;
    }
  }
}
