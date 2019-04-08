import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  id: number;
  product: Product;
  constructor(private router: Router, private route: ActivatedRoute, private gService: GeneralService) { }

  ngOnInit() {
    this.gService.updateWishlistCount();
    this.gService.updateCartCount();
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.gService.getProductById(this.id);
  }

  goback() {
    this.router.navigateByUrl('/home');
  }

}
