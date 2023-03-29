import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }

  open = false ;

  toggle(){
    
    this.open = ! this.open;
  }

}
