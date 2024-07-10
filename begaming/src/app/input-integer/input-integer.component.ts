import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hardware } from '../hardware-list/Hardware';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  
  @Input()
  quantity!: number; 

  @Input() max!: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()

  upQuantity():void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }
  downQuantity():void{
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
    
  }

}
