import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WineComponent } from './pages/wine/wine.component';
import { FoodComponent } from './pages/food/food.component';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';
import { MenuComponent } from './components/common/menu/menu.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WineComponent,
    FoodComponent,
    CocktailsComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
