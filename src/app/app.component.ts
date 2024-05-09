import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Nuevo Cliente', url: '/nuevo-cliente', icon: 'person-add'},
    { title: 'Nuevo Destintario', url: '/nuevo-destinatario', icon: "paper-plane"},
    { title: 'Nuevo Paquete', url: '/nuevo-paquete', icon: "cube"},
    { title: 'Nueva Entrega', url: '/nueva-entrega', icon: "car"},
  ];
  constructor() {}
}
