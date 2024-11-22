import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealTimeUpdatesPageRoutingModule } from './real-time-updates-routing.module';

import { RealTimeUpdatesPage } from './real-time-updates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealTimeUpdatesPageRoutingModule
  ],
  declarations: [RealTimeUpdatesPage]
})
export class RealTimeUpdatesPageModule {}
