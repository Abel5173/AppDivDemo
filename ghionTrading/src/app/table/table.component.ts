import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  ports: any[] = [];
  start: number = 0
  end: number = 5
  constructor(private dataService: DataService, private router: Router){}

  ngOnInit(): void {
    this.ports = this.dataService.ports
  }
forwardBtn(){
  if(this.end + 5 < this.ports.length){
    this.start += 5
    this.end += 5
  }else if(this.start + 5 < this.ports.length){
    this.start += 5
    this.end = this.ports.length
  }
}
firstpage(){
  this.start = 0
  this.end = 5
}
lastpage(){
  if(this.ports.length%5 !== 0){
    this.start = this.ports.length - this.ports.length%5
    this.end = this.ports.length
    console.log(this.start," ", this.end);
  }else{
    this.start = this.ports.length - 5
    this.end = this.ports.length
  }
}
backBtn(){
  if(this.start > 0){
    this.end = this.start
    this.start -= 5
  }else{
    this.start = 0
    this.end = 5
  }
}
ceil(num: number){
  return Math.ceil(num)
}
  navigateToForm(): void {
    this.router.navigate(['form-control']);
  }

  deleteBtn(i: number){
    this.ports.splice(i, 1)
  }
  editBtn(i: number){
    console.log(this.ports[i]);
  }
}
