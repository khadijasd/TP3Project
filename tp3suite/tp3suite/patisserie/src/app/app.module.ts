import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PiesComponent } from './pies/pies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { MainContentComponent } from './main-content/main-content.component';
import { TousDetailsComponent } from './tous-details/tous-details.component';

import { CakeShopComponent } from './cake-shop/cake-shop.component';
import { CheesecakesComponent } from './cheesecakes/cheesecakes.component';

@NgModule({
  declarations: [
    AppComponent,
    
    PiesComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
   
    SidebarComponent,
    MainContentComponent,
    TousDetailsComponent,
   
    CakeShopComponent,
        CheesecakesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
