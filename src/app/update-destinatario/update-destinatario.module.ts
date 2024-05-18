import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDestinatarioPageRoutingModule } from './update-destinatario-routing.module';

import { UpdateDestinatarioPage } from './update-destinatario.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDestinatarioPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [UpdateDestinatarioPage]
})
export class UpdateDestinatarioPageModule {}
