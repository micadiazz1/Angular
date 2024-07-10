import { Component } from '@angular/core';
import { Hardware } from './Hardware';
import { HardwareCartService } from '../hardware-cart.service';
import { HardwareDataService } from '../hardware-data.service';

@Component({
  selector: 'app-hardware-list',
  templateUrl: './hardware-list.component.html',
  styleUrl: './hardware-list.component.scss'
})
export class HardwareListComponent   {

    hardwares : Hardware[] = [];

   

    constructor(private cart: HardwareCartService,private hardwareDataService:HardwareDataService){
      
    }
    ngOnInit():void{
      this.hardwareDataService.getAll().subscribe(hardwares=>this.hardwares = hardwares);
    }
    
    addToCart(hardware:Hardware):void{
      this.cart.addToCart(hardware);
      hardware.stock-=hardware.quantity;
      hardware.quantity=0;
      
    }
  


}
