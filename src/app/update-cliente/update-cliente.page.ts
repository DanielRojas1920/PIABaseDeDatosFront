import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.page.html',
  styleUrls: ['./update-cliente.page.scss'],
})
export class UpdateClientePage implements OnInit {

  clienteForm = this.formBuilder.group({
    'IDCliente': ['', Validators.required],
    'Nombre': ['', Validators.compose([ Validators.pattern('[a-zA-Z]*')])],
    'ApellidoP': ['', Validators.compose([ Validators.pattern('[a-zA-Z]*')])],
    'ApellidoM': ['', Validators.compose([ Validators.pattern('[a-zA-Z]*')])],
    'Correo': ['', Validators.compose([ Validators.pattern('[0-9a-zA-Z-.]*@[A-za-z]*.com')])],
    'Telefono': ['', Validators.compose([ Validators.pattern('[0-9]*')])],
  })
  
  searchOptionSelected : string= '';
  isModalOpen: boolean = false;
  canDismiss: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: ConnectionService) { }

  ngOnInit() {
  }

  async updateCliente(){
    let row = {
      'Nombre': this.clienteForm.value.Nombre,
      'ApellidoP': this.clienteForm.value.ApellidoP,
      'ApellidoM': this.clienteForm.value.ApellidoM,
      'Correo': this.clienteForm.value.Correo,
      'Telefono': this.clienteForm.value.Telefono,
    };

    for (let key of Object.keys(row)){
      if (key in row && row[key as keyof typeof row] === ''){
        delete row[key as keyof typeof row]
      }
    }

    let Auxrow = JSON.stringify(row, null, 4);

    await this.http.UpdateTable('Clientes', JSON.parse(Auxrow), this.clienteForm.value.IDCliente || '');

    await this.clienteForm.reset()
  }

  ChangeIsModalOpen(bool: boolean){
    this.isModalOpen = bool
  }
  ChangeCanDismiss(bool: boolean){
    this.canDismiss = bool
  }

  closeModal($event: number){

    if ($event !== 0){
      this.clienteForm.get('IDCliente')?.setValue($event.toString());
    }


    this.isModalOpen = false;
    this.canDismiss = true;
  }

  async changeSearchOptionSelected(repository: string){

    this.searchOptionSelected = repository;
    
    await this.ChangeIsModalOpen(true);
    await this.ChangeCanDismiss(false);
  }

}
