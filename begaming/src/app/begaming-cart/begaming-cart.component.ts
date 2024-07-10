import { Component } from '@angular/core';
import { HardwareCartService } from '../hardware-cart.service';
import { Hardware } from '../hardware-list/Hardware';

@Component({
  selector: 'app-begaming-cart',
  templateUrl: './begaming-cart.component.html',
  styleUrl: './begaming-cart.component.scss'
})
export class BegamingCartComponent {
  cartList: Hardware[] = [];
  constructor(private cart: HardwareCartService){
    cart.cartList.subscribe(c=> this.cartList = c)
  }

}
