import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  id: number;
  product: Product;
  checkPinActive = true;
  constructor(private router: Router, private route: ActivatedRoute, private gService: GeneralService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.gService.updateWishlistCount();
    this.gService.updateCartCount();
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.gService.getProductById(this.id);
  }

  goback() {
    this.router.navigateByUrl('/home');
  }

  checkPin(pinInput) {
    if (pinInput.value.length === 6) {
      this.snackbar.open(`Delivery available at ${pinInput.value}`, 'Dismiss');
    } else {
      this.snackbar.open('Not a valid Pin', 'Dismiss');
    }
  }

}
