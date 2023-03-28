import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from "src/app/components/signin/signin.component";
import { EntryPagesComponent } from "./entry-pages.component";

const routes: Routes = [
    { 
        path: '', 
        component: EntryPagesComponent,
        children: [
            { path: '', redirectTo: 'signin', pathMatch: 'full',  },
            { path: 'signin', pathMatch: 'full', component: SigninComponent, data: { title: 'Login' } },
        ]  
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class EntryPageRoutingModule {}
  