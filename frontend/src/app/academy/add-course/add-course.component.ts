import { Component, OnDestroy, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcademyCourseService } from './../course.service';
import { AuthService } from 'app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  animations: fuseAnimations,
})
export class AddCourseComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isLoading = false;
  constructor(
    private _formBuilder: FormBuilder,
    private courseService: AcademyCourseService,
    private authService: AuthService,
    private router: Router
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(200),
        ],
      ],
      category: ['', Validators.required],
      keywords: [''],
      duration: [0, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      const course = {
        ...this.form.value,
        creator: this.authService.getUserId(),
      };
      this.courseService
        .createCourse(course)
        .then((res) => {
          this.router.navigate(['/courses']);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {}
}
