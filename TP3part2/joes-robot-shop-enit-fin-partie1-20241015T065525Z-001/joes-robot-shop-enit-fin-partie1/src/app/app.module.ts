import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CatalogComponent } from 'src/app/catalog/catalog.component';
import { SiteHeaderComponent } from 'src/app/site-header/site-header.component';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from 'src/app/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
