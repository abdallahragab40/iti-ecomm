import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/auth/auth.service';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastService } from 'angular-toastify';
import { AcademyCoursesService } from 'app/academy/courses.service';

@Component({
  selector: 'access-code',
  templateUrl: './access-code.component.html',
  styleUrls: ['./access-code.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccessCodeComponent implements OnInit {
  form: FormGroup;
  /**
   * Constructor
   *
   * @param {MatDialogRef<AccessCodeComponent>} matDialogRef
   */
  constructor(
    public matDialogRef: MatDialogRef<AccessCodeComponent>,
    private http: HttpClient,
    public authService: AuthService,
    private _toastService: ToastService,
    private _academyCoursesService: AcademyCoursesService
  ) {}
  ngOnInit() {
    this.form = new FormGroup({
      accessCode: new FormControl(
        null,
        Validators.required,
        this.validateAccessCode.bind(this)
      ),
    });
  }

  validateAccessCode(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    const accessCode = control.value;
    return this.http.post(`student/access-code`, { accessCode }).pipe(
      map((result: { valid: boolean }) =>
        result.valid ? null : { incorrect: true }
      ),
      catchError((err) => {
        return of(null);
      })
    );
  }

  onSendAccessCode() {
    if (this.form.invalid) {
      return;
    }
    const accessCode = this.form.value;
    this.http.post(`student/access-course`, accessCode).subscribe(
      (res: any) => {
        this._academyCoursesService.onCoursesChanged.next(res.courses);
        this._toastService.success(res.message);
      },
      (err) => {
        console.log(err);
      }
    );
    this.form.reset();
  }
}
