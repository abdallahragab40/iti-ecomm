import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/auth/auth.service';
import { environment } from 'environments/environment';

@Component({
    selector     : 'message-dialog',
    templateUrl  : './message.component.html',
    styleUrls    : ['./message.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MessageComponent implements OnInit
{
  form: FormGroup;
  imagePreview: string;
    /**
     * Constructor
     *
     * @param {MatDialogRef<ImageDialogComponent>} matDialogRef
     */
    constructor(
        public matDialogRef: MatDialogRef<MessageComponent>,
        private http: HttpClient,
        public authService: AuthService
    )
    {
    }
  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(20), Validators.maxLength(200)],
      })
    });
  }

  onSendMessage() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value.message);
    this.form.reset();
  }
}
