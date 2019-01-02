import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import routes from './routes';

const routes: Routes = [
  {path: '', loadChildren: './home-page/home-page.module#HomePageModule'},
  {path: 'home', loadChildren: './home-page/home-page.module#HomePageModule'},
  {path: 'products', loadChildren: './product-list-page/product-list-page.module#ProductListPageModule'},
  {path: 'products/:id', loadChildren: './product-details-page/product-details-page.module#ProductDetailsPageModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
