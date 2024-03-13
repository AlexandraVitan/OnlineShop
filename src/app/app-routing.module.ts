import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { PerfumePageComponent } from './perfume-page/perfume-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'perfume/:id', component: PerfumePageComponent },
  { path: 'cart-page', component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
