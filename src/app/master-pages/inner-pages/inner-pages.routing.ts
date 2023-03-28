import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "src/app/components/home/home.component";
import { InnerPagesComponent } from "./inner-pages.component";

const routes: Routes = [
  {
    path: '',
    component: InnerPagesComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full',  },
      { path: 'home', pathMatch: 'full', component: HomeComponent, data: { title: 'Home' } },
    ]  
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class InnerPageRoutingModule { }
  