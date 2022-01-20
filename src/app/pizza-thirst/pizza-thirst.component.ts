import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-thirst',
  templateUrl: './pizza-thirst.component.html',
  styleUrls: ['./pizza-thirst.component.css']
})
export class PizzaThirstComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/log-in']);
}
}
