import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  isLoggedIn = false;
  wishlistCount = 0;
  cartlistCount = 0;

  constructor(private gService: GeneralService, private router: Router) { }

  ngOnInit() {
    this.gService.getWishListCountUpdatedListener().subscribe(val => {
      this.wishlistCount = val;
    });

    this.gService.getCartUpdatedListener().subscribe(val => {
      this.cartlistCount = val;
    });

    this.gService.userStatusSource().subscribe( user => {
        this.isLoggedIn = user.status;
    })

  }

  logout() {
    this.gService.logout();
  }

}
