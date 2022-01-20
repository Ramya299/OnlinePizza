import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { UserMenuComponent } from './sign-up/user-menu/user-menu.component';
import { PizzaThirstComponent } from './pizza-thirst/pizza-thirst.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrdersComponent } from './orders/orders.component';
import { PizzalistComponent } from './pizzalist/pizzalist.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    UserMenuComponent,
    PizzaThirstComponent,
    CartComponent,
    CheckOutComponent,
    OrdersComponent,
    PizzalistComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

