
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzalistService {

  constructor(private httpclient: HttpClient) { }

  getPizzas():Observable<any> {
    return this.httpclient.get("https://localhost:44334/api/Pizza")

  }

  GetPizza(){
    return this.httpclient.get<any>("https://localhost:44334/api/Pizza")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
