import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any =[]
  public lstPizza = new BehaviorSubject<any>([]);

  constructor() { }
  getPizza(){
    return this.lstPizza.asObservable();
  }

  setPizza(pizza:any){
    this.cartItemList.push(...pizza);
    this.lstPizza.next(pizza);

  }

  addtoCart(pizza : any){
    this.cartItemList.push(pizza);
    this.lstPizza.next(this.cartItemList);
   
    
    console.log(this.cartItemList)
  }

 
  
  removeCartItem(pizza: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(pizza.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.lstPizza.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.lstPizza.next(this.cartItemList);
  }
}
