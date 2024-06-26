import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaEntregaPageRoutingModule } from './nueva-entrega-routing.module';

import { NuevaEntregaPage } from './nueva-entrega.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaEntregaPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [NuevaEntregaPage]
})
export class NuevaEntregaPageModule {}
