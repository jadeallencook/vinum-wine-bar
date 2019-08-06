import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { FoodComponent } from './pages/food/food.component';
import { WineComponent } from './pages/wine/wine.component';

const routes: Routes = [
  { path: 'wine', component: WineComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'food', component: FoodComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
