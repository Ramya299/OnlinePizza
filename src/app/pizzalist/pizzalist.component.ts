
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../classes/Pizza';
import { CartService } from '../Services/cart.service';
import { PizzalistService } from '../Services/pizzalist.service';

@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.css']
})
export class PizzalistComponent implements OnInit {

  public totalItem : number = 0;
  public lstPizza : any ;
  constructor(private router: Router, private service:PizzalistService,private cartService : CartService) { }
  //lstPizza!: Pizza[];
  ngOnInit() {
    this.service.getPizzas()
    .subscribe
    (
      res=>
      {
          this.lstPizza = res;
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
addtocart(com: any){
  this.cartService.addtoCart(com);
}


}
