import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'pricing-success',
  templateUrl: './pricing-success.component.html',
  styleUrls: ['./pricing-success.component.scss'],
})
export class PricingSuccessComponent implements OnInit {
  plan: string;
  /**
   * Constructor
   */
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get(`instructor/plan`).subscribe(
      (res: { plan: string }) => {
        this.plan = res.plan;
      },
      (error) => {
        this.plan = undefined;
      }
    );
  }
}
