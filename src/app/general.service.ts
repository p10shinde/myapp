import { Inject, Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import * as _ from 'underscore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private count = new Subject<number>();
  userFound: User;
  private cartCount = new Subject<number>();
  private userStatusSubject = new BehaviorSubject({status : false, user : this.userFound});
  daysList: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  delCharges: (number | string)[] = [20, 'FREE', 100, 150, 'FREE', 50, 'FREE'];
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

      ],
      deliveryCharges: 0
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
      ],
      deliveryCharges: 0
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
      ],
      deliveryCharges: 0
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
      ],
      deliveryCharges: 0
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
      ],
      deliveryCharges: 0
    }
  ];

  users: User[] = [
    {
      id: 1, username: 'pankaj', password: '123', image: 'u1'
    },
    {
      id: 2, username: 'shinde', password: 'shinde123', image: 'u2'
    }
  ];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router) { }

  login(user: User) {
    this.userFound = _.findWhere(this.users, user);
    if (_.isUndefined(this.userFound)) {
      this.updateUserStatus(false);
      return false;
    } else {
      this.updateUserStatus(true, this.userFound);
      return true;
    }
  }

  updateUserStatus(status: boolean, user?: User) {
    if (status) {
      this.storage.set('user', user);
      this.userStatusSubject.next({status: true, user});
      this.router.navigate(['home']);
    } else {
      this.storage.remove('user');
      this.userStatusSubject.next({status: true, user});
    }
  }

  userLoggedIn() {
    const user = this.storage.get('user');
    if (user) {
      this.userStatusSubject.next({status: true, user});
      if (this.router.url === '/login') {
        this.router.navigate(['home']);
      }
    } else {
      if (this.router.url === '/shoppingcart') {
        this.router.navigate(['login']);
      }
    }

    console.log(this.router.url);
  }



  userStatusSource() {
    return this.userStatusSubject.asObservable();
  }


  validateUser(user: User) {

  }

  logout() {
    const user = this.storage.get('user');
    this.storage.remove('user');
    // this.localStorage.getItem('user').subscribe( user => {
    //   console.log(user)
      // this.localStorage.removeItem('user').subscribe( () => {
    this.userStatusSubject.next({status: false, user});
      // });
    // });
  }

  getProducts() {
    return this.products;
  }

  getCartProducts() {
    return this.products.filter( dt => {
      if (dt.cart) {
        return dt;
      }
    });
  }

  getProductById(id: number) {
    return this.products.filter( dt => {
      if (id === dt.id ) {
        return dt;
      }
    })[0];
  }

  getCartProductById(id: number) {
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
    this.cartCount.next(cCount.length);
  }

  getWishListCountUpdatedListener() {
    return this.count.asObservable();
  }

  getCartUpdatedListener() {
    return this.cartCount.asObservable();
  }

  getDeliveryDate() {
    const randomNum = Math.floor(Math.random() * (7 - 0) + 0);
    const day = randomNum + 1;
    const days = this.daysList[randomNum];
    const delCharges = this.delCharges[randomNum];
    return { day, days, delCharges };
  }

  removeFromCart(id) {
    this.products.forEach( dt => {
      if (dt.id === id) {
        dt.cart = false;
      }
    });
  }

  addToWishList(id: number) {
    this.products.map(dt => {
      if (dt.id === id) {
        dt.wishlist = !dt.wishlist;
      }
    });
    this.updateWishlistCount(id)
   }

   addToFavourite(id: number) {
    this.products.map(dt => {
      if (dt.id === id) {
        dt.favourite = !dt.favourite;
      }
    });
  }
}
