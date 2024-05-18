import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateClientePageRoutingModule } from './update-cliente-routing.module';

import { UpdateClientePage } from './update-cliente.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateClientePageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [UpdateClientePage]
})
export class UpdateClientePageModule {}
