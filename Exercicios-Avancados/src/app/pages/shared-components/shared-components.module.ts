import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedComponentsPageRoutingModule } from './shared-components-routing.module';

import { SharedComponentsPage } from './shared-components.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsPageRoutingModule
  ],
  declarations: [SharedComponentsPage]
})
export class SharedComponentsPageModule {}
