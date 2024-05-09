import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoDestinatarioPage } from './nuevo-destinatario.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoDestinatarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoDestinatarioPageRoutingModule {}
