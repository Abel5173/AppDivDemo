import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // @Input() port: any;
  @Input() ports: any[] = [];

  constructor() { }

  ngOnInit(): void {
      this.ports
  }

  @Output() addClicked: EventEmitter<void> = new EventEmitter();

  addBtn() {
    this.addClicked.emit();
  }
}
