import { Component, inject, OnInit } from '@angular/core';
import { Header } from './shared/header/header';
import { RouterOutlet } from '@angular/router';

import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'storage';

  private _primeNg = inject(PrimeNG);

  ngOnInit() {
    this._primeNg.ripple.set(true);
  }
}
