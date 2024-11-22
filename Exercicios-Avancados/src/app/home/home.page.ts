import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  isModalOpen: boolean = false;

  onModalClose() {
    this.isModalOpen = false;
  }

  onModalConfirm() {
    console.log('Modal confirmado!');
    this.isModalOpen = false;
  }
}
