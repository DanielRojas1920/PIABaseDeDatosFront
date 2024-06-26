import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.scss'],
})
export class CreateClienteComponent  implements OnInit {
  @Output() closeModal= new EventEmitter<number>();

 

  clienteForm = this.formBuilder.group({
    Nombre: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚ]*( [a-zA-ZáéíóúÁÉÍÓÚ]+)?')])],
    ApellidoP: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚ]*( [a-zA-ZáéíóúÁÉÍÓÚ]+)?')])],
    ApellidoM: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚ]*( [a-zA-ZáéíóúÁÉÍÓÚ]+)?')])],
    Correo: ['', Validators.compose([Validators.required, Validators.pattern('[0-9a-zA-Z-.]*@[A-za-z]*.com')])],
    Telefono: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
  })


  constructor(private formBuilder: FormBuilder, private http: ConnectionService) { }

  ngOnInit() {}


  EmitCloseModal(){
    this.closeModal.emit(0);
  }


  async createCliente(){
    let insert = {
      'Nombre': this.clienteForm.value.Nombre,
      'ApellidoP': this.clienteForm.value.ApellidoP,
      'ApellidoM': this.clienteForm.value.ApellidoM,
      'Correo': this.clienteForm.value.Correo,
      'Telefono': this.clienteForm.value.Telefono,
    }
    await this.http.insertRow('Clientes', insert);
    await this.clienteForm.reset();
  }

}
