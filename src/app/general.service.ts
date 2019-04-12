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
      price: 2159.25,
      highlights: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Pellentesque consequat neque sed elit condimentum semper.',
        'Vivamus vestibulum arcu eu nibh sodales, non tincidunt dolor pellentesque.',
        'Fusce euismod risus convallis commodo pretium.',
        'Sed fringilla ipsum a blandit imperdiet.',
        'Aenean quis elit quis urna tincidunt posuere.',
        'Nullam vel erat ut justo commodo mattis vulputate nec nulla.'
      ],
      reviews: [
        { title: 'Worst Prouct', description: 'Broke just in 5 days',
        images: ['reviewBad.jpg', 'reviewBad.jpg'],
        username: 'Pankaj Shinde', location: 'Pune, India', date: 'Today', rating: 1}

      ]
    },
    {
      id: 2,
      name: 'product 2',
      rating: 4.2,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1'
      ],
      favourite: false,
      wishlist: true,
      cart: true,
      price: 3254.25,
      highlights: [
        'Sed porttitor tellus sed mi mollis dapibus.',
        'Fusce sollicitudin lectus nec eros euismod vehicula ut dapibus justo.',
        'Quisque fermentum justo at sollicitudin convallis.',
        'Aenean non neque condimentum, lacinia augue vitae, egestas nisl.',
        'Vestibulum volutpat odio sed leo feugiat volutpat.',
        'Aenean a sem tempus, pellentesque leo eu, suscipit diam.',
        'Maecenas fermentum sapien vitae ligula aliquet dapibus.'
      ],
      reviews: [
        { title: 'Very good phone', description: 'Good Battery life. User interface is amazing',
        images: ['reviewGood.jpg', 'reviewGood.jpg'],
        username: 'ABC XYZ', location: 'kisjdi, India', date: '23 January, 2019', rating: 4}
      ]
    },
    {
      id: 3,
      name: 'product 3',
      rating: 4.1,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1',
      ],
      favourite: false,
      wishlist: false,
      cart: false,
      price: 125.99,
      highlights: [
        'Sed porttitor tellus sed mi mollis dapibus.',
        'Fusce sollicitudin lectus nec eros euismod vehicula ut dapibus justo.',
        'Quisque fermentum justo at sollicitudin convallis.',
        'Aenean non neque condimentum, lacinia augue vitae, egestas nisl.',
        'Vestibulum volutpat odio sed leo feugiat volutpat.',
        'Aenean a sem tempus, pellentesque leo eu, suscipit diam.',
        'Maecenas fermentum sapien vitae ligula aliquet dapibus.'
      ],
      reviews: [
        { title: 'Very good headphone', description: 'Sound Quality us amazing',
        images: ['reviewGood.jpg', 'reviewGood.jpg', 'reviewGood.jpg', 'reviewGood.jpg', 'reviewGood.jpg', 'reviewGood.jpg'],
        username: 'WEQ HTY', location: 'PLASIJ, India', date: '1 March, 2019', rating: 4.2}
      ]
    },
    {
      id: 4,
      name: 'product 4',
      rating: 3.5,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1'
      ],
      favourite: false,
      wishlist: false,
      cart: false,
      price: 348.12,
      highlights: [
        'Sed porttitor tellus sed mi mollis dapibus.',
        'Fusce sollicitudin lectus nec eros euismod vehicula ut dapibus justo.',
        'Quisque fermentum justo at sollicitudin convallis.',
        'Aenean non neque condimentum, lacinia augue vitae, egestas nisl.',
        'Vestibulum volutpat odio sed leo feugiat volutpat.',
        'Aenean a sem tempus, pellentesque leo eu, suscipit diam.',
        'Maecenas fermentum sapien vitae ligula aliquet dapibus.',
        'Fusce sollicitudin lectus nec eros euismod vehicula ut dapibus justo.',
        'Quisque fermentum justo at sollicitudin convallis.',
        'Aenean non neque condimentum, lacinia augue vitae, egestas nisl.'
      ],
      reviews: [
        { title: 'Very good headphone', description: 'Sound Quality us amazing',
        images: ['reviewGood.jpg', 'reviewGood.jpg', 'reviewGood.jpg', 'reviewGood.jpg', 'reviewGood.jpg', 'reviewGood.jpg'],
        username: 'WQE RGER', location: 'SDW, U.S.', date: '29 February, 2019', rating: 4.8}
      ]
    },
    {
      id: 5,
      name: 'product 5',
      rating: 2.3,
      image: '../../assets/images/sample_product.jpg',
      description: [
        'description1',
        'description1',
        'description1'
      ],
      favourite: true,
      wishlist: true,
      cart: true,
      price: 3697.15,
      highlights: [
        'Sed porttitor tellus sed mi mollis dapibus.',
        'Fusce sollicitudin lectus nec eros euismod vehicula ut dapibus justo.',
        'Fusce sollicitudin lectus nec eros euismod vehicula ut dapibus justo.',
        'Quisque fermentum justo at sollicitudin convallis.',
        'Aenean non neque condimentum, lacinia augue vitae, egestas nisl.'
      ],
      reviews: [
        { title: 'Quality of the Cover is average. Cracked.', description: 'Cracked within a day',
        images: ['reviewBad.jpg', 'reviewBad.jpg', 'reviewBad.jpg', 'reviewBad.jpg'],
        username: 'IUASId IQWND', location: 'APSLD, Pakistan', date: '1 April, 2019', rating: 1},
        { title: 'Very good headphone', description: 'Sound Quality us amazing',
        images: ['reviewGood.jpg', 'reviewGood.jpg', 'reviewGood.jpg', 'reviewGood.jpg', 'reviewGood.jpg', 'reviewGood.jpg'],
        username: 'WQE RGER', location: 'SDW, U.S.', date: '29 February, 2019', rating: 4.8}
      ]
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
