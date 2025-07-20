import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MessageError } from '../../shared/message-error/message-error';

@Component({
  selector: 'app-register-page',
  imports: [
    FloatLabelModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  registerForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
  });

  submitForm() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log('Form submitted:', formData);
      // Here you can handle the form submission, e.g., send it to a server
    } else {
      console.log('Form is invalid');
    }
  }
}
