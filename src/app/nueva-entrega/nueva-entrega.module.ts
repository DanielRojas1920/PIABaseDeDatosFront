import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaEntregaPageRoutingModule } from './nueva-entrega-routing.module';

import { NuevaEntregaPage } from './nueva-entrega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaEntregaPageRoutingModule
  ],
  declarations: [NuevaEntregaPage]
})
export class NuevaEntregaPageModule {}
