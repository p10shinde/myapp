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
  userName;
  userImage;

  constructor(private gService: GeneralService, private router: Router) { }

  ngOnInit() {
    this.gService.getWishListCountUpdatedListener().subscribe(val => {
      this.wishlistCount = val;
    });

    this.gService.getCartUpdatedListener().subscribe(val => {
      this.cartlistCount = val;
    });

    this.gService.userStatusSource().subscribe( user => {
      if (user.status) {
        if (user.user) {
          this.userName = user.user.username;
          if (user.user.image) {
            this.userImage = '../../assets/images/' + user.user.image + '.jpg';
          } else {
            this.userImage = '../../assets/images/unknown-user.png';
          }
          this.isLoggedIn = user.status;
        } else {
          this.userImage = '../../assets/images/unknown-user.png';
          this.userName = '';
        }
      } else {
        this.userImage = '../../assets/images/unknown-user.png';
        this.userName = '';
        this.isLoggedIn = user.status;
      }
    });

    this.gService.userLoggedIn();


  }

  logout() {
    this.gService.logout();
  }

}
