import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NuevoClientePageModule } from './nuevo-cliente/nuevo-cliente.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nuevo-cliente',
    pathMatch: 'full'
  },
  {
    path: 'nuevo-cliente',
    loadChildren: () => import('./nuevo-cliente/nuevo-cliente.module').then( m => m.NuevoClientePageModule)
  },
  {
    path: 'nuevo-destinatario',
    loadChildren: () => import('./nuevo-destinatario/nuevo-destinatario.module').then( m => m.NuevoDestinatarioPageModule)
  },
  {
    path: 'nuevo-paquete',
    loadChildren: () => import('./nuevo-paquete/nuevo-paquete.module').then( m => m.NuevoPaquetePageModule)
  },
  {
    path: 'nueva-entrega',
    loadChildren: () => import('./nueva-entrega/nueva-entrega.module').then( m => m.NuevaEntregaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
