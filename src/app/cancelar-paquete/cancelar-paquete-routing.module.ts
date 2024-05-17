import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelarPaquetePage } from './cancelar-paquete.page';

const routes: Routes = [
  {
    path: '',
    component: CancelarPaquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelarPaquetePageRoutingModule {}
