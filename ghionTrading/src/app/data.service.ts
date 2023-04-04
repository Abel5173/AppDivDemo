import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  date: Date = new Date()

  ports = [
    {id: 'IMP22001', type:'DO', method: 'cash', date: this.date, shipingAgent:'sample agent',amount:'5568.99' },
{id: 'IMP22002', type:'DO', method: 'cash', date: this.date, shipingAgent:'sample agent',amount:'5568.99' },
{id: 'IMP22003', type:'DO', method: 'cash', date: this.date, shipingAgent:'sample agent',amount:'5568.99' },
{id: 'IMP22004', type:'DO', method: 'cash', date: this.date, shipingAgent:'sample agent',amount:'5568.99' },
{id: 'IMP22005', type:'DO', method: 'cash', date: this.date, shipingAgent:'sample agent',amount:'5568.99' },
{id: 'IMP22006', type:'DO', method: 'cash', date: this.date, shipingAgent:'sample agent',amount:'5568.99' },
{id: 'IMP22007', type:'DO', method: 'cash', date: this.date, shipingAgent:'sample agent',amount:'5568.99' },
{id: 'IMP22008', type:'DO', method: 'cash', date: this.date, shipingAgent:'sample agent',amount:'5568.99' }, 
{id: 'IMP22009', type:'DO', method: 'cash', date: this.date, shipingAgent:'sample agent',amount:'5568.99' },
{id: 'IMP22010', type:'DO', method: 'cash', date: this.date, shipingAgent:'sample agent',amount:'5568.99' }, 
{id: 'IMP22011', type:'DO', method: 'cash', date: this.date, shipingAgent:'sample agent',amount:'5568.99' }, 
  ]

  constructor(){}
  
}
