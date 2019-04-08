import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../general.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  favourite = false;
  constructor(private router: Router, private gService: GeneralService, private snackBar: MatSnackBar) { }
  myArray(n: number): any[] {
    return Array(n);
  }

  ngOnInit() {
    this.products = this.gService.getProducts();
    this.gService.updateWishlistCount();
    this.gService.updateCartCount();
  }

  navigate(id: number) {
    this.router.navigateByUrl('/details/' + id);
  }

  favouriteClick(index: number) {
    this.products[index].favourite = !this.products[index].favourite;
  }

  wishlistClick(index: number) {
    this.products[index].wishlist = !this.products[index].wishlist;
    this.gService.updateWishlistCount(this.products[index].id);
  }

  addcartClick(index: number) {
    this.products[index].cart = !this.products[index].cart;
    this.gService.updateCartCount(this.products[index].id);
    if (this.products[index].cart === false) {
      this.snackBar.open('Removed from cart', 'Dismiss');
    } else {
      this.snackBar.open('Added to cart', 'Dismiss');
    }
  }

}
