import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent {

  @Input('products') public products: Array<any> = [];
  
}
