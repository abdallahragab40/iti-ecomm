import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {
  PayPalScriptService,
  IPayPalConfig,
  NgxPaypalComponent,
  ICreateOrderRequest,
} from 'ngx-paypal';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'pricing-offers',
  templateUrl: './pricing-offers.component.html',
  styleUrls: ['./pricing-offers.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PricingOffersComponent implements OnInit {
  @ViewChild('payPalElem1') paypalComponent1?: NgxPaypalComponent;
  @ViewChild('payPalElem2') paypalComponent2?: NgxPaypalComponent;
  @ViewChild('payPalElem3') paypalComponent3?: NgxPaypalComponent;
  public payPalConfig?: IPayPalConfig;
  /**
   * Constructor
   */
  constructor(
    private payPalScriptService: PayPalScriptService,
    private http: HttpClient,
    private _toastService: ToastService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initConfig();
    this.payPalScriptService.registerPayPalScript(
      {
        clientId:
          'AS3SdKtY0IAeFgpb-fqX80CCFEtHcZOvD-1Puv0RBqAuD7GfuFlZus_ZmH9pwEGsR34cpvPPlZjtpAHh',
        currency: 'USD',
      },
      (payPalApi) => {
        if (this.paypalComponent1) {
          this.paypalComponent1.customInit(payPalApi);
        }

        if (this.paypalComponent2) {
          this.paypalComponent2.customInit(payPalApi);
        }

        if (this.paypalComponent3) {
          this.paypalComponent3.customInit(payPalApi);
        }
      }
    );
  }

  addSuccessToast(message: string) {
    this._toastService.success(message);
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'sb',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: '59',
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: '59',
                  },
                },
              },
              items: [
                {
                  name: 'Premium Plan',
                  quantity: '1',
                  // category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'USD',
                    value: '59',
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'horizontal',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        this.http
          .post(`instructor/plan`, {
            plan: 'Premium',
          })
          .subscribe(
            (res: { message: string; plan: string }) => {
              this.addSuccessToast(res.message);
              this.router.navigate([`pricing/success`]);
            },
            (error: { message: string }) => {
              this._toastService.error(error.message);
            }
          );
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
