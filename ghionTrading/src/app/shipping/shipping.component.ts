import { Component } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  constructor(public toggle: ToggleService){}

}
