
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckOutService } from '../Services/check-out.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  public totalItem : number = 0;
  constructor(private router: Router, public service: CheckOutService, private toastrservice:ToastrService,private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getPizza()
  .subscribe(res=>{
    this.totalItem = res.length;
  })
  }
  onSumbit()
  {
    this.service.register().subscribe(
      (res:any)=>
      {
        if(res.succeeded)
        {
          this.service.formModel.reset();
          this.toastrservice.success('Transaction Sucessfull','  Pizza ordered  Sucessful.');
        }
        else {
         
        }
      },
      
    );
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/log-in']);
}
}
