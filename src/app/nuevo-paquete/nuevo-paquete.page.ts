import { Component, OnInit, inject } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-paquete',
  templateUrl: './nuevo-paquete.page.html',
  styleUrls: ['./nuevo-paquete.page.scss'],
})
export class NuevoPaquetePage implements OnInit {

  tipos: any;
  searchOptionSelected: string;
  isModalOpen: boolean;
  canDismiss: boolean;
  idSelectedClientes: string='';
  idSelectedDestinatarios: string='';
  selector:number=0;
  idSelectedSucursal: string = '';
  Esfragil: boolean = false;

  paquetesForm = this.formBuilder.group({
    Desc: ['', Validators.required],
    Ancho: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*(.[0-9]+)?')])],
    Largo: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*(.[0-9]+)?')])],
    Alto: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*(.[0-9]+)?')])],
    Peso: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*(.[0-9]+)?')])],
    IDTipo: ['', Validators.required],
    IDCliente: ['', Validators.required],
    IDDestinatarios: ['', Validators.required],
    IDSucursales: ['', Validators.required],
  })

  httpService = inject(ConnectionService)

  constructor(private formBuilder: FormBuilder) {
    this.searchOptionSelected = '';
    this.isModalOpen = false;
    this.canDismiss = true;
  }

  ngOnInit() {
    this.httpService.getRows('Tipos').then((response) => {
      response.subscribe((data) => {
        this.tipos= data;
      })
    });
  }

  async changeSearchOptionSelected(str:string){
    this.selector=0;
    this.searchOptionSelected = str;
    await this.ChangeIsModalOpen(true);
    await this.ChangeCanDismiss(false);
  }

  changeEsfragil(){
    this.Esfragil = !this.Esfragil;
  }

  async changeCreateClienteOptionSelected(){
    this.selector=1;
    await this.ChangeIsModalOpen(true);
    await this.ChangeCanDismiss(false);
  }

  async changeCreateDestinatarioOptionSelected(){
    this.selector=2;
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
    this.isModalOpen = false;
    this.canDismiss = true;

    if ($event !== 0 && this.searchOptionSelected === 'Clientes'){
      this.paquetesForm.get('IDCliente')?.setValue($event.toString());
    } 

    if ($event !== 0 && this.searchOptionSelected === 'Destinatarios'){
      this.paquetesForm.get('IDDestinatarios')?.setValue($event.toString());
    }

    if ($event !== 0 && this.searchOptionSelected === 'Sucursales'){
      this.paquetesForm.get('IDSucursales')?.setValue($event.toString());
    } 
    
  }

  stringToBoolean(str: string): boolean {
    return str.toLowerCase() === 'true';
}


  async createPaquete(){
    let row = {
      'Desc': this.paquetesForm.value.Desc,
      'IDTipo': Number(this.paquetesForm.value.IDTipo),
      'IDCliente': Number(this.paquetesForm.value.IDCliente),
      'IDDestinatarios': Number(this.paquetesForm.value.IDDestinatarios),
      'IDSucursales': Number(this.paquetesForm.value.IDSucursales),
      'Ancho': Number(this.paquetesForm.value.Ancho),
      'Alto': Number(this.paquetesForm.value.Alto),
      'Largo': Number(this.paquetesForm.value.Largo),
      'Peso': Number(this.paquetesForm.value.Peso),
      'EsFragil': this.Esfragil,
    }


    this.httpService.insertRow('Paquetes', row);
    await this.paquetesForm.reset();
  }



}
