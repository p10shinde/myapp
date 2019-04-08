import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private count = new Subject();
  private cartCount = new Subject();
  products: Product[] = [
    {
      id: 1,
      name: 'product 1',
      rating: 2.0,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1'
      ],
      favourite: false,
      wishlist: true,
      cart: true,
      price: 2159.25
    },
    {
      id: 2,
      name: 'product 2',
      rating: 4.5,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1'
      ],
      favourite: false,
      wishlist: true,
      cart: true,
      price: 3254.25
    },
    {
      id: 3,
      name: 'product 3',
      rating: 4.5,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1',
      ],
      favourite: false,
      wishlist: false,
      cart: false,
      price: 125.99
    },
    {
      id: 4,
      name: 'product 4',
      rating: 4.5,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1'
      ],
      favourite: false,
      wishlist: false,
      cart: false,
      price: 348.12
    },
    {
      id: 5,
      name: 'product 5',
      rating: 4.5,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1'
      ],
      favourite: true,
      wishlist: true,
      cart: true,
      price: 3697.15
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.filter( dt => {
      if (id === dt.id ) {
        return dt;
      }
    })[0];
  }

  updateWishlistCount(id?: number) {
    const tCount = this.products.filter( dt => {
      if ( dt.id === id) {
        dt.wishlist = dt.wishlist;
      }
      return dt.wishlist;
    });
    this.count.next(tCount.length);
  }

  updateCartCount(id?: number) {
    const cCount = this.products.filter( dt => {
      if ( dt.id === id) {
        dt.cart = dt.cart;
      }
      return dt.cart;
    });
    console.log(cCount);
    this.cartCount.next(cCount.length);
  }

  getCountUpdatedListener() {
    return this.count.asObservable();
  }

  getCartUpdatedListener() {
    return this.cartCount.asObservable();
  }
}
