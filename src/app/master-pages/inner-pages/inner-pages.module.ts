import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NzIconModule } from "ng-zorro-antd/icon";
import { HeaderComponent } from "src/app/components/header/header.component";
import { InnerPagesComponent } from "./inner-pages.component";
import { InnerPageRoutingModule } from "./inner-pages.routing";

import { SharedModule } from "src/app/shared/shared.module";
import { ProductsModule } from "src/app/components/products/products.module";
import { HomeComponent } from "src/app/components/home/home.component";


@NgModule({
  declarations: [
      InnerPagesComponent,
      HeaderComponent,
      HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    InnerPageRoutingModule,
    SharedModule,
    ProductsModule
  ],
  exports: [],
})

export class InnerPageModule {
    constructor() {
      // Sub Module
    }
  }
  