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
  ];
  constructor(private connection: ConnectionService) {
    connection.getRows('Clientes')

  }
}
