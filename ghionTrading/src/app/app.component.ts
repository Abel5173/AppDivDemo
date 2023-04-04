import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ports: any[] = []
  toggle = false

  handleClick(){
    this.toggle = !this.toggle
  }

  onDataEmitted(data: any) {
    console.log(data)
    this.ports.push(data)
  }
}
