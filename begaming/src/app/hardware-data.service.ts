import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Hardware } from './hardware-list/Hardware';

const URL = 'https://668ea78cbf9912d4c92f3e96.mockapi.io/Hardware';
@Injectable({
  providedIn: 'root'
})
export class HardwareDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Hardware[]>{
    return this.http.get<Hardware[]>(URL)
    .pipe(
      tap((hardwares: Hardware[])=> hardwares.forEach(hardware=> hardware.quantity = 0))
      
      
    );
  }
}
