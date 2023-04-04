import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
})
export class FormControlComponent {
  @Output() cancleBtn = new EventEmitter()
  @Output() dataEmitter = new EventEmitter()
  
  constructor(private dataService: DataService, private router: Router){}
  port ={
  id: '',
  type:'',
  method: '',
  shipingAgent: '',
  amount: '',
  date:new Date}
  cancleClicked(){
    this.router.navigate([''])
}

  submit(){
    this.dataService.ports.push(this.port);
    console.log(this.port)
    this.router.navigate([''])
  }
}
