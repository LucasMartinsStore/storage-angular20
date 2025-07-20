import { Component, input } from '@angular/core';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-message-success',
  imports: [MessageModule],
  templateUrl: './message-success.html',
  styleUrl: './message-success.scss',
})
export class MessageSuccess {
  successMessage = input.required<string>();
}
