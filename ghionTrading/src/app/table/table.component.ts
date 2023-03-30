import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  date = new Date()
  portHandling = [
 {ID: 'IMP22001', Storage:'DO', Cash: 'cash', date: this.date, shipingAgent:'sample agent',Amount:'5568.99' },
 {ID: 'IMP22001', Storage:'DO', Cash: 'cash', date: this.date, shipingAgent:'sample agent',Amount:'5568.99' },
 {ID: 'IMP22001', Storage:'DO', Cash: 'cash', date: this.date, shipingAgent:'sample agent',Amount:'5568.99' },
 {ID: 'IMP22001', Storage:'DO', Cash: 'cash', date: this.date, shipingAgent:'sample agent',Amount:'5568.99' },
 {ID: 'IMP22001', Storage:'DO', Cash: 'cash', date: this.date, shipingAgent:'sample agent',Amount:'5568.99' },
 {ID: 'IMP22001', Storage:'DO', Cash: 'cash', date: this.date, shipingAgent:'sample agent',Amount:'5568.99' },
 {ID: 'IMP22001', Storage:'DO', Cash: 'cash', date: this.date, shipingAgent:'sample agent',Amount:'5568.99' },
 {ID: 'IMP22001', Storage:'DO', Cash: 'cash', date: this.date, shipingAgent:'sample agent',Amount:'5568.99' },
 {ID: 'IMP22001', Storage:'DO', Cash: 'cash', date: this.date, shipingAgent:'sample agent',Amount:'5568.99' },
 {ID: 'IMP22001', Storage:'DO', Cash: 'cash', date: this.date, shipingAgent:'sample agent',Amount:'5568.99' },
  ]
}
