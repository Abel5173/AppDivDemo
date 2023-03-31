import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ports: any[] = []
  toggle = false
  form = false

  handleClick(){
    this.toggle = !this.toggle
  }

  onDataEmitted(data: any) {
    this.ports.push(data)
  }

  addForm(){
    this.form = !this.form
  }
}
