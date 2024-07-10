import { Component } from '@angular/core';
import { Hardware } from './Hardware';
import { HardwareCartService } from '../hardware-cart.service';

@Component({
  selector: 'app-hardware-list',
  templateUrl: './hardware-list.component.html',
  styleUrl: './hardware-list.component.scss'
})
export class HardwareListComponent   {

    hardwares : Hardware[] = [
      {
        nombre: "Amd 5 3600",
        tipo: "Procesador",
        precio: 300000,
        stock: 10,
        image: "assets/img/procesador53600.jpeg",
        quantity:0
      },
      {
      nombre: "Amd 10 3600",
      tipo: "Procesador",
      precio: 400000,
      stock: 4,
      image: "assets/img/procesador53600.jpeg",
      quantity:0
      },
      {
        nombre: "Amd 2 3600",
        tipo: "Procesador",
        precio: 3022200,
        stock: 0,
        image: "assets/img/procesador53600.jpeg",
        quantity:0
      },
    ];

   

    constructor(private cart: HardwareCartService){
      
    }
    ngOnInit():void{

    }
    
    addToCart(hardware:Hardware):void{
      this.cart.addToCart(hardware);
      hardware.stock-=hardware.quantity;
      hardware.quantity=0;
      
    }
  


}
