import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {

  searchOptionSelected : string= '';
  isModalOpen: boolean = false;
  canDismiss: boolean = false;
  EstadosPaquete: any;
  tipos: any;

  
  paquetesStatusForm = this.formBuilder.group({
    IDEstadoPaquete: ['', Validators.required]
  })

  paquetesClienteForm = this.formBuilder.group({
    IDCliente: ['', Validators.required]
  })

  paquetesAvanzadoForm = this.formBuilder.group({
    IDCliente: [''],
    IDDestinatario: [''],
    IDTipo: [''],
    Clave: [''],
  })


  constructor(private formBuilder: FormBuilder, private httpService: ConnectionService) { }

  ngOnInit() {
    this.httpService.getRows('EstadoPaquete').then((response) => {
      response.subscribe((data) => {
        this.EstadosPaquete= data;
      })
    });
    this.httpService.getRows('Tipos').then((response) => {
      response.subscribe((data) => {
        this.tipos= data;
      })
    });
  }

  async changeSearchOptionSelected(id: number, repository: string){ // /consultasSP/:id/:Param
      var url = 'consultasSP/'
      switch (id) {
        case 0:
          url = url + id.toString() + '/aux';
          this.searchOptionSelected = url;
          break;
        case 1:
          url = url + id.toString() + '/' + this.paquetesStatusForm.value.IDEstadoPaquete;
          this.searchOptionSelected = url;
          break;
        case 2:
          url = url + id.toString() + '/' + this.paquetesClienteForm.value.IDCliente;
          this.searchOptionSelected = url;
          break;
        case 3:
          let array= Object.values(this.paquetesAvanzadoForm.value).map((value) => {
            if (value === '') return 'null';
            else return value;
          })
          url = url + id.toString() + '/' + array.join('0');
          this.searchOptionSelected = url;
          break;

        default:
          this.searchOptionSelected = repository;
      }
      
      await this.ChangeIsModalOpen(true);
      await this.ChangeCanDismiss(false);

  }
  

  

  ChangeIsModalOpen(bool: boolean){
    this.isModalOpen = bool
  }
  ChangeCanDismiss(bool: boolean){
    this.canDismiss = bool
  }

  closeModal($event: number){

    if ($event !== 0 && this.searchOptionSelected === 'Clientes'){
      this.paquetesClienteForm.get('IDCliente')?.setValue($event.toString());
      this.paquetesAvanzadoForm.get('IDCliente')?.setValue($event.toString());
    } 

    if ($event !== 0 && this.searchOptionSelected === 'Destinatarios'){
      this.paquetesAvanzadoForm.get('IDDestinatario')?.setValue($event.toString());
    }

    this.isModalOpen = false;
    this.canDismiss = true;
  }


  resetDestinatario(){
    this.paquetesAvanzadoForm.get('IDDestinatario')?.setValue('');
  }

  resetCliente(){
    this.paquetesAvanzadoForm.get('IDCliente')?.setValue('');
  }

  resetTipo(){
    this.paquetesAvanzadoForm.get('IDTipo')?.setValue('');
  }


}
