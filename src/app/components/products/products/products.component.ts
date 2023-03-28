import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Array<any> = [];
  constructor(public productService: ProductsService){}

  public ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response.data;
    })
  }

}
