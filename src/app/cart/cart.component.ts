
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public pizzas : any = [];
  public totalItem : number = 0;
  constructor(private router : Router,private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getPizza()
    .subscribe(res=>{
      this.pizzas = res;
  })

  this.cartService.getPizza()
  .subscribe(res=>{
    this.totalItem = res.length;
  })
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/log-in']);
}
removeItem(item: any){
  this.cartService.removeCartItem(item);
}
emptycart(){
  this.cartService.removeAllCart();
}

  }

