
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  log: any;

  constructor(private fb: FormBuilder, private http:HttpClient) { }

  readonly BaseURI="https://localhost:44334/api";
  formModel=this.fb.group(
    {
      username : ['',Validators.email],
      password : ['',[Validators.required,Validators.minLength(4)]]
    }
  );

  register()
  {
    var body={
      username:this.formModel.value.username,
      password:this.formModel.value.password
    };
   
   return  this.http.post(this.BaseURI+'/AccountManagement/CreateUser?username='+body.username+'&password='+body.password+'',null);

  }
  login() {
    var body={
      username:this.formModel.value.username,
      password:this.formModel.value.password
    };
    return this.http.post(this.BaseURI + '/AccountManagement/login?Username='+body.username+'&Password='+body.password+'', null )
  }
}