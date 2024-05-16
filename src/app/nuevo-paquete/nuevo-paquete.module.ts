import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoPaquetePageRoutingModule } from './nuevo-paquete-routing.module';

import { NuevoPaquetePage } from './nuevo-paquete.page';
import { SearchResultComponent } from '../search-result/search-result.component';
import { CreateClienteComponent } from '../create-cliente/create-cliente.component';
import { CreateDestinatarioComponent } from '../create-destinatario/create-destinatario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoPaquetePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [NuevoPaquetePage, 
    SearchResultComponent, 
    CreateClienteComponent,
    CreateDestinatarioComponent,]
})
export class NuevoPaquetePageModule {}
