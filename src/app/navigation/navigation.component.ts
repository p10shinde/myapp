import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
  providers: [GeneralService]
})
export class NavigationComponent implements OnInit {
  wishlistCount = -1;
  cartlistCount = 0;

  constructor(private gService: GeneralService) { }

  ngOnInit() {
    this.gService.getWishListCountUpdatedListener().subscribe(
     (val) => {
          console.log('Next: ' + val);
      });

    this.gService.getCartUpdatedListener().subscribe(val => {
      this.cartlistCount = Number(val);
    });




    console.log('subscribed')

  }

}
