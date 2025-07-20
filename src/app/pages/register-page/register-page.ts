import { Component, inject } from '@angular/core';
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
import { Register } from './service/register';
import { MessageSuccess } from '../../shared/message-success/message-success';

@Component({
  selector: 'app-register-page',
  imports: [
    FloatLabelModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    MessageSuccess,
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  isMessageSuccess = false;
  isMessageError = false;

  messageSuccess = 'Registro realizado com sucesso!';

  private _registerService = inject(Register);

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
    const formData = this.registerForm.getRawValue();
    this._registerService.registerUser(formData).subscribe({
      next: () => {
        this.isMessageSuccess = true;
        this.isMessageError = false;
        this.registerForm.reset();
      },
      error: () => {
        this.isMessageError = true;
        this.isMessageSuccess = false;
      },
    });
  }
}
