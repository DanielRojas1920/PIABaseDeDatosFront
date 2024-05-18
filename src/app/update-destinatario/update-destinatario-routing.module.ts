import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDestinatarioPage } from './update-destinatario.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDestinatarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDestinatarioPageRoutingModule {}
