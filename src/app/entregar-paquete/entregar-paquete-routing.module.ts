import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregarPaquetePage } from './entregar-paquete.page';

const routes: Routes = [
  {
    path: '',
    component: EntregarPaquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregarPaquetePageRoutingModule {}
