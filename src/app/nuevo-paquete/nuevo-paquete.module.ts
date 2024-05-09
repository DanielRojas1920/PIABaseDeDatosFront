import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoPaquetePageRoutingModule } from './nuevo-paquete-routing.module';

import { NuevoPaquetePage } from './nuevo-paquete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoPaquetePageRoutingModule
  ],
  declarations: [NuevoPaquetePage]
})
export class NuevoPaquetePageModule {}
