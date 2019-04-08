import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  wishlistCount = 0;
  cartlistCount = 0;

  constructor(private gService: GeneralService) { }

  ngOnInit() {
    this.gService.getCountUpdatedListener().subscribe(val => {
      this.wishlistCount = Number(val);
    });

    this.gService.getCartUpdatedListener().subscribe(val => {
      this.cartlistCount = Number(val);
    });

  }

}
