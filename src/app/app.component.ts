import { Component } from '@angular/core';
import { ConnectionService } from './connection.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Nuevo Paquete', url: '/nuevo-paquete', icon: "cube"},
    { title: 'Nueva Entrega', url: '/nueva-entrega', icon: "car"},
    { title: 'Cancelar Paquete', url: '/cancelar-paquete', icon: "trash"},
    { title: 'Entregar Paquete', url: '/entregar-paquete',  icon: 'bag-check'},
    { title: 'Consultar Paquetes', url: '/consultas', icon: 'search' },
    { title: 'Actualizar Cliente', url: '/update-cliente', icon: 'cloud-upload'},
    { title: 'Actualizar Destinatario', url: '/update-destinatario', icon: 'cloud-upload' },
    { title: 'Actualizar Paqueteria', url: '/update-paquete',  icon: 'cloud-upload'}
  ];
  constructor(private connection: ConnectionService) {}
}
