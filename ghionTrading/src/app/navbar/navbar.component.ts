import { Component } from '@angular/core';
import { ToggleService } from '../toggle.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public myIcon = 'fa-coffee';

  constructor(public togleservice:ToggleService){}  

 
  togglesidebar(){


    this.togleservice.toggle()
  }

}
