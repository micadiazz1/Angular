import { Injectable } from '@angular/core';
import { Hardware } from './hardware-list/Hardware';
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HardwareCartService {
 
  constructor() {}

  private _cartList: Hardware []=[];
  cartList: BehaviorSubject< Hardware[]> = new BehaviorSubject(this._cartList);

  addToCart(hardware: Hardware) {
    let item: Hardware | undefined  = this._cartList.find((v1)=>v1.nombre ==hardware.nombre);
    if(!item){
      this._cartList.push({ ... hardware});
      console.log(hardware.quantity);
    }else{
      item.quantity+= hardware.quantity;
      console.log("aaa");
    }
    this.cartList.next(this._cartList);
    console.log(this._cartList.length);
  }

  

}
