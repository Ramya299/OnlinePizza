
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {
  readonly BaseURI="https://localhost:44334/api";
  constructor(private httpclient: HttpClient, private fb: FormBuilder) { }

  getOrders():Observable<any> {
    return this.httpclient.get("https://localhost:44334/api/CheckOut")

  }
  formModel=this.fb.group({
    Name:['',Validators.required],
    MobileNumber:['',Validators.required],
    Place:['',Validators.required],
    city:['',Validators.required],
    Email:['',Validators.required]
  });
register()
{
  var body={
    Name:this.formModel.value.Name,
    MobileNumber:this.formModel.value.MobileNumber,
    Place:this.formModel.value.Place,
    city:this.formModel.value.city,
    Email:this.formModel.value.Email
  };
 return  this.httpclient.post(this.BaseURI+'/CheckOut',body);
}
}
