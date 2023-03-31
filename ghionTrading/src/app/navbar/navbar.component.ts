import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output()  buttonClick: EventEmitter<void> = new EventEmitter();
  public myIcon = 'fa-coffee';

  togglesidebar(){
    this.buttonClick.emit();
  }

}
