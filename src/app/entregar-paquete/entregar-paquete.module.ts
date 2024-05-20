import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregarPaquetePageRoutingModule } from './entregar-paquete-routing.module';

import { EntregarPaquetePage } from './entregar-paquete.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregarPaquetePageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [EntregarPaquetePage]
})
export class EntregarPaquetePageModule {}
