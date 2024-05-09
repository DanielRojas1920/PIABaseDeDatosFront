import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoDestinatarioPageRoutingModule } from './nuevo-destinatario-routing.module';

import { NuevoDestinatarioPage } from './nuevo-destinatario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoDestinatarioPageRoutingModule
  ],
  declarations: [NuevoDestinatarioPage]
})
export class NuevoDestinatarioPageModule {}
