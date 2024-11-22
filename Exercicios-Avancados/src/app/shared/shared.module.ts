import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component'; // Certifique-se do caminho correto
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ModalComponent] // Exporte o componente para que outros módulos possam usá-lo
})
export class SharedModule {}
