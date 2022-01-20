
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckOut } from '../classes/CheckOut';
import { CartService } from '../Services/cart.service';
import { CheckOutService } from '../Services/check-out.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public totalItem : number = 0;
  constructor(private _CheckOutService: CheckOutService, private router: Router,private cartService : CartService) {}
  lstCheckOut!: CheckOut[];
  ngOnInit() {
    this._CheckOutService.getOrders()
    .subscribe
    (
      data=>
      {
          this.lstCheckOut = data;
      }
    )
    this.cartService.getPizza()
  .subscribe(res=>{
    this.totalItem = res.length;
  })
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/log-in']);
}
}
