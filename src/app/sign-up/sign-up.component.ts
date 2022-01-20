import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../Services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public service: SignUpService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit(){
    this.service.register().subscribe(
      
      err=>{
        console.log(err);
      });
    console.log("created");
  }


}
