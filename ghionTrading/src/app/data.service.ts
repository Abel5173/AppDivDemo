import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static instanceCounter = 0;

  constructor() {
      DataService.instanceCounter++;
      console.log(`DataService instance created. Total instances: ${DataService.instanceCounter}`);
   }
  portHandling: Array<any> = [];

  addPort(port: any){
    this.portHandling.push(port)
    console.log('addport ',this.portHandling);
  }
  getPort(){
    console.log('getPort ',this.portHandling);
    return this.portHandling
  }
  
}
