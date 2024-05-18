import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from '../search-result/search-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateClienteComponent } from '../create-cliente/create-cliente.component';
import { CreateDestinatarioComponent } from '../create-destinatario/create-destinatario.component';



@NgModule({
  declarations: [SearchResultComponent, CreateClienteComponent, CreateDestinatarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports: [SearchResultComponent, CreateClienteComponent, CreateDestinatarioComponent],
})
export class SharedModule { }
