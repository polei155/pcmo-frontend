import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ProductsListingComponent } from "./products-listing/products-listing.component";
import { ProductsComponent } from "./products/products.component";

@NgModule({
    declarations: [
      ProductsComponent,
      ProductsListingComponent
    ],
    exports: [
        ProductsComponent,
        ProductsListingComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
})

export class ProductsModule {}