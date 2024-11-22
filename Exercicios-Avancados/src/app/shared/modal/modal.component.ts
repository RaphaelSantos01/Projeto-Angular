import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() showConfirm: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() confirmAction = new EventEmitter<void>();
}