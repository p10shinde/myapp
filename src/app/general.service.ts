import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private count = new Subject();
  products = [
    {
      id: 1,
      name: 'product 1',
      rating: 2.0,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1',
        'description1',
        'description1',
        'description1'
      ],
      favourite: false,
      wishlist: true
    },
    {
      id: 2,
      name: 'product 2',
      rating: 4.5,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1',
        'description1',
        'description1',
        'description1'
      ],
      favourite: false,
      wishlist: true
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
        'description1',
        'description1',
        'description1'
      ],
      favourite: false,
      wishlist: false
    },
    {
      id: 4,
      name: 'product 4',
      rating: 4.5,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1',
        'description1',
        'description1',
        'description1'
      ],
      favourite: false,
      wishlist: false
    },
    {
      id: 5,
      name: 'product 5',
      rating: 4.5,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1',
        'description1',
        'description1',
        'description1'
      ],
      favourite: true,
      wishlist: true
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  updateWishlistCount(id?: number) {
    const tCount = this.products.filter( dt => {
      if( dt.id === id) {
        dt.wishlist = dt.wishlist;
      }
      return dt.wishlist;
    });
    this.count.next(tCount.length);
  }

  getCountUpdatedListener() {
    return this.count.asObservable();
  }
}
