import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  products = [];
  favourite = false;
  constructor(private router: Router, private gService: GeneralService) { }
  myArray(n: number): any[] {
    return Array(n);
  }

  ngOnInit() {
    this.products = this.gService.getProducts();
    this.gService.updateWishlistCount();
  }

  navigate(e: object) {
    this.router.navigateByUrl('/details');
  }

  favouriteClick(index: number) {
    this.products[index].favourite = !this.products[index].favourite;
  }

  wishlistClick(index: number) {
    this.products[index].wishlist = !this.products[index].wishlist;
    this.gService.updateWishlistCount(this.products[index].id);
  }

}
