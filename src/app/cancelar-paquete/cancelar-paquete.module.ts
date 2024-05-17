import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelarPaquetePageRoutingModule } from './cancelar-paquete-routing.module';

import { CancelarPaquetePage } from './cancelar-paquete.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelarPaquetePageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [CancelarPaquetePage]
})
export class CancelarPaquetePageModule {}
