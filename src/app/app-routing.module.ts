import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const entryRoutes: Route = {
  path: '',
  loadChildren: () => import('./master-pages/entry-pages/entry-page.module').then((m) => m.EntryPageModule)
};

const innerRoutes: Route = {
  path: '',
  loadChildren: () => import('./master-pages/inner-pages/inner-pages.module').then((m) => m.InnerPageModule)
};

const routes: Routes = [entryRoutes, innerRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
