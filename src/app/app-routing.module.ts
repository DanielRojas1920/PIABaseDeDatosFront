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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
