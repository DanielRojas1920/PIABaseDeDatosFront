import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaEntregaPage } from './nueva-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaEntregaPageRoutingModule {}
