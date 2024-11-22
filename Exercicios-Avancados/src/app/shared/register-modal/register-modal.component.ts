import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
}
