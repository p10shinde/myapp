import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})
export class ShoppingCartComponent implements OnInit {
  emptyCartSwitch: boolean;
  constructor(private gService: GeneralService) { }

  ngOnInit() {
    this.emptyCartSwitch == true;
    this.gService.updateWishlistCount();
    this.gService.updateCartCount();
  }

}
