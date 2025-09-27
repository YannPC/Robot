import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  // that input tells the child component and any components that utlize this child component 
  //that it does have a product member that can receive data from a parent
  @Input() product!: IProduct;
  //it's event
  @Output() buy = new EventEmitter()

   getImageURL(product:IProduct) 
  {
    return '/assets/images/robot-parts/' + product.imageName;
  }

   getDiscountedClasses(product:IProduct) {
    if (product.discount > 0 ) return ['strikethrough'];
    else return [];
  }
 
  buyButtonClicked(product: IProduct) {

    this.buy.emit(); // this how we trigger the event

  }

}
