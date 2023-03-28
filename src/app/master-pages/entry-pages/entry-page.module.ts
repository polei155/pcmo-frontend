import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SigninComponent } from "src/app/components/signin/signin.component";
import { SignupComponent } from "src/app/components/signup/signup.component";
import { SharedModule } from "src/app/shared/shared.module";
import { EntryPageRoutingModule } from "./entry-page.routing";
import { EntryPagesComponent } from "./entry-pages.component";

@NgModule({
    declarations: [
        SigninComponent,
        EntryPagesComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        EntryPageRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
    exports: [],
  })
  export class EntryPageModule {}
  