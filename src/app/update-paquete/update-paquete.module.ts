import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePaquetePageRoutingModule } from './update-paquete-routing.module';

import { UpdatePaquetePage } from './update-paquete.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePaquetePageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [UpdatePaquetePage]
})
export class UpdatePaquetePageModule {}
