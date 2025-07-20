import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  UserPayload,
  UserRegister,
} from '../interface/model/register.interface';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Register {
  readonly ENDPOINT = environment.apiUrl;
  private _httpClient = inject(HttpClient);

  registerUser(user: UserPayload): void {
    this._httpClient.post<UserRegister>(`${this.ENDPOINT}/users`, user);
  }
}
