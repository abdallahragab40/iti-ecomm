import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'pricing-style-3',
  templateUrl: './style-3.component.html',
  styleUrls: ['./style-3.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PricingStyle3Component implements OnInit {
  isAuth: boolean;
  /**
   * Constructor
   */
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuth = this.authService.getIsAuth();
  }

  get getUserRole() {
    return this.authService.getRole();
  }
}
