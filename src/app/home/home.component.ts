import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { SignUpService } from '../Services/sign-up.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public totalItem : number = 0;
  constructor(private router: Router, private cartService:CartService) {}

  ngOnInit(): void {
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
