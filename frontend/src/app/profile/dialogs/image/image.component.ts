import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/auth/auth.service';
import { environment } from 'environments/environment';
import { mimeType } from '../../mime-type.validator';

@Component({
  selector: 'image-dialog',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ImageDialogComponent implements OnInit {
  form: FormGroup;
  imagePreview: string;
  /**
   * Constructor
   *
   * @param {MatDialogRef<ImageDialogComponent>} matDialogRef
   */
  constructor(
    public matDialogRef: MatDialogRef<ImageDialogComponent>,
    private http: HttpClient,
    public authService: AuthService
  ) {}
  ngOnInit() {
    this.form = new FormGroup({
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSaveImage() {
    if (this.form.invalid) {
      return;
    }
    let formData = new FormData();
    formData.append('image', this.form.value.image);
    this.http
      .patch(`users/image`, formData)
      .subscribe((response: { user: any }) => {
        localStorage.setItem('image', response.user.image);
        window.location.reload();
      });
    this.form.reset();
  }
}
