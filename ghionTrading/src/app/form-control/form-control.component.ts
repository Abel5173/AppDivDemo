import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
  providers:[DataService]
})
export class FormControlComponent {
  @Output() cancleBtn = new EventEmitter()
  @Output() dataEmitter = new EventEmitter()

  port ={
  id: '',
  type:'',
  method: '',
  shipingAgent: '',
  amount: '',
  date:''}
  cancleClicked(){
    this.cancleBtn.emit()
}

  submit(){
    this.dataEmitter.emit(this.port)
    this.cancleClicked()
  }
}
