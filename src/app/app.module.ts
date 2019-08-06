import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WineComponent } from './pages/wine/wine.component';
import { FoodComponent } from './pages/food/food.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DrinksComponent } from './pages/drinks/drinks.component';

@NgModule({
  declarations: [
    AppComponent,
    WineComponent,
    FoodComponent,
    PageNotFoundComponent,
    DrinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
