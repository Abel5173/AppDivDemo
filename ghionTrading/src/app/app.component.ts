import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ghionTrading';
  toggle = false
  form = false
  handleClick(){
    this.toggle = !this.toggle
  }

  addForm(){
    this.form = !this.form
  }
}
