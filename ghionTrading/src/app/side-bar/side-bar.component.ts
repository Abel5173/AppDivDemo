import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
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
