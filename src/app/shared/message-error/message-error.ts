import { Component, input } from '@angular/core';

import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-message-error',
  imports: [MessageModule],
  templateUrl: './message-error.html',
  styleUrl: './message-error.scss',
})
export class MessageError {
  errorMessage = input.required<string>();
}
