
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { OrdersComponent } from './orders/orders.component';
import { PizzaThirstComponent } from './pizza-thirst/pizza-thirst.component';
import { PizzalistComponent } from './pizzalist/pizzalist.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { UserMenuComponent } from './sign-up/user-menu/user-menu.component';

const routes: Routes = [
  {
    path : 'log-in' , component : LogInComponent },
  {path : 'sign-up',component : SignUpComponent},
  {path : 'Home',component : HomeComponent},
  {path : 'user-menu',component : UserMenuComponent},
{path : 'pizzathirst', component :PizzaThirstComponent},
  {path : 'cart',component : CartComponent},
  {path : 'orders', component : OrdersComponent},
  {path:'check-out', component: CheckOutComponent },
  {path:'pizzalist', component: PizzalistComponent },

 
  {
    path : '',
    redirectTo : 'sign-up',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

