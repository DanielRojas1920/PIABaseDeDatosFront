import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nuevo-paquete',
    pathMatch: 'full'
  },
  {
    path: 'nuevo-paquete',
    loadChildren: () => import('./nuevo-paquete/nuevo-paquete.module').then( m => m.NuevoPaquetePageModule)
  },
  {
    path: 'nueva-entrega',
    loadChildren: () => import('./nueva-entrega/nueva-entrega.module').then( m => m.NuevaEntregaPageModule)
  },
  {
    path: 'cancelar-paquete',
    loadChildren: () => import('./cancelar-paquete/cancelar-paquete.module').then( m => m.CancelarPaquetePageModule)
  },
  {
    path: 'consultas',
    loadChildren: () => import('./consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
  {
    path: 'update-cliente',
    loadChildren: () => import('./update-cliente/update-cliente.module').then( m => m.UpdateClientePageModule)
  },
  {
    path: 'update-destinatario',
    loadChildren: () => import('./update-destinatario/update-destinatario.module').then( m => m.UpdateDestinatarioPageModule)
  },
  {
    path: 'update-paquete',
    loadChildren: () => import('./update-paquete/update-paquete.module').then( m => m.UpdatePaquetePageModule)
  },
  {
    path: 'entregar-paquete',
    loadChildren: () => import('./entregar-paquete/entregar-paquete.module').then( m => m.EntregarPaquetePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
