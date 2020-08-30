import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subject, Subscription, Observable, of } from 'rxjs';
import { takeUntil, switchMap, map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'signup-community',
  templateUrl: './signup-community.component.html',
  styleUrls: ['./signup-community.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class SignupCommunityComponent implements OnInit, OnDestroy {
  countries: Array<any> = [];
  cities: Array<any> = [];
  countryToken: string;
  isLoading = false;
  private authStatusSub: Subscription;

  // Vertical Stepper
  verticalStepperStep1: FormGroup;
  verticalStepperStep2: FormGroup;
  verticalStepperStep3: FormGroup;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private _httpClient: HttpClient,
    private authService: AuthService
  ) {
    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true,
        },
        toolbar: {
          hidden: true,
        },
        footer: {
          hidden: true,
        },
      },
    };

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Vertical Stepper form stepper
    this.verticalStepperStep1 = this._formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
        this.validateNameUniqueness.bind(this),
      ],
      email: [
        '',
        [Validators.required, Validators.email],
        this.validateEmailUniqueness.bind(this),
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/
          ),
        ],
      ],
      passwordConfirm: ['', [Validators.required, confirmPasswordValidator]],
    });

    this.verticalStepperStep2 = this._formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.verticalStepperStep3 = this._formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.min(1000000000)]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(200),
        ],
      ],
    });

    // Update the validity of the 'passwordConfirm' field
    // when the 'password' field changes
    this.verticalStepperStep1
      .get('password')
      .valueChanges.pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.verticalStepperStep1
          .get('passwordConfirm')
          .updateValueAndValidity();
      });

    this._httpClient
      .get('https://www.universal-tutorial.com/api/getaccesstoken', {
        headers: {
          Accept: 'application/json',
          'api-token':
            'B76-0ROXwYIkreKIiIfmClBzKgY8K1hFCHz1HBEdqM2VZDW_o9fVV6Pk4ZHMZraopis',
          'user-email': 'amir.mohammed2121@gmail.com',
        },
      })
      .pipe(
        map((res: { auth_token: string }) => {
          this.countryToken = res.auth_token;
          return res.auth_token;
        }),
        switchMap((token) =>
          this._httpClient.get(
            'https://www.universal-tutorial.com/api/countries/',
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
        )
      )
      .subscribe((response: any) => {
        this.countries = response;
      });

    this.verticalStepperStep2
      .get('country')
      .valueChanges.subscribe((country) => {
        this._httpClient
          .get(`https://www.universal-tutorial.com/api/states/${country}`, {
            headers: { Authorization: `Bearer ${this.countryToken}` },
          })
          .subscribe((response: any) => {
            this.cities = response;
          });
      });

    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((authStatus) => {
        this.isLoading = false;
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  validateNameUniqueness(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    const username = control.value;
    return this._httpClient.post(`users/unique-username`, { username }).pipe(
      map((result: { unique: boolean }) =>
        result.unique ? null : { unique: true }
      ),
      catchError((err) => {
        return of(null);
      })
    );
  }

  validateEmailUniqueness(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    const accessCode = control.value;
    return this._httpClient.post(`users/unique-email`, { accessCode }).pipe(
      map((result: { unique: boolean }) =>
        result.unique ? null : { unique: true }
      ),
      catchError((err) => {
        return of(null);
      })
    );
  }

  finishVerticalStepper() {
    const signupFormData = {
      ...this.verticalStepperStep1.value,
      ...this.verticalStepperStep2.value,
      ...this.verticalStepperStep3.value,
    };
    if (
      this.verticalStepperStep1.invalid ||
      this.verticalStepperStep2.invalid ||
      this.verticalStepperStep3.invalid
    ) {
      return;
    }
    this.isLoading = true;
    this.authService.createCommunity(signupFormData);
  }
}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('passwordConfirm');

  if (!password || !passwordConfirm) {
    return null;
  }

  if (passwordConfirm.value === '') {
    return null;
  }

  if (password.value === passwordConfirm.value) {
    return null;
  }

  return { passwordsNotMatching: true };
};
