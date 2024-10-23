import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TousDetailsComponent } from './tous-details/tous-details.component'; 
import { CakeShopComponent } from './cake-shop/cake-shop.component';
import { PiesComponent } from './pies/pies.component'; 
import { CheesecakesComponent } from './cheesecakes/cheesecakes.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to 'home'
  { path: 'home', component: MainContentComponent }, // Home route
  { path: 'tous', component: TousDetailsComponent }, 
  { path: 'template', component: CakeShopComponent }, 
  { path: 'pies', component: PiesComponent },
  { path: 'cheesecakes', component: CheesecakesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
