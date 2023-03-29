import { Component } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor(public toggle: ToggleService){}

  dropDown = 'fa fa-angle-up ml-2'
  upArrow = 'fa fa-angle-down ml-2'
  dropdownOpen = false;
  PaydropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  paytoggleDropdown(){
    this.PaydropdownOpen = !this.PaydropdownOpen
  }

  
}
