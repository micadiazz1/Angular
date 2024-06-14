import { Component } from '@angular/core';

@Component({
  selector: 'app-hardware-list',
  templateUrl: './hardware-list.component.html',
  styleUrl: './hardware-list.component.scss'
})
export class HardwareListComponent {

    harware={
      "nombre": "Amd 5 3600",
      "tipo": "Procesador",
      "precio": 300000,
      "stock": 10,
      "image": "assets/img/procesador53600.jpeg"
    }
    constructor(){
      
    }
    ngOnInit():void{

    }

}
