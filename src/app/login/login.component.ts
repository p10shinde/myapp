import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  signupActive = false;
  username: FormControl;
  password: FormControl;
  password2: FormControl;
  constructor(private gService: GeneralService) { }

  ngOnInit() {
    this.gService.updateWishlistCount();
    this.gService.updateCartCount();
    this.username = new FormControl('');
    this.password = new FormControl('');
    this.password2 = new FormControl('');
  }

  login() {
    const user = {username: this.username.value, password: this.password.value};
    this.gService.login(user);
  }

  signUp() {
    this.signupActive = true;
  }

  backButton() {
    this.signupActive = false;
  }

}
