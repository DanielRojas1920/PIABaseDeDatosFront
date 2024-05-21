import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-update-paquete',
  templateUrl: './update-paquete.page.html',
  styleUrls: ['./update-paquete.page.scss'],
})
export class UpdatePaquetePage implements OnInit {

  tipos: any;
  searchOptionSelected: string;
  isModalOpen: boolean;
  canDismiss: boolean;
  idSelectedClientes: string='';
  idSelectedDestinatarios: string='';
  selector:number=0;
  idSelectedSucursal: string = '';
  Esfragil: string= '';

  paquetesForm = this.formBuilder.group({
    IDPaquete: ['', Validators.required],
    Desc: [''],
    Ancho: ['', Validators.compose([ Validators.pattern('[0-9]*(.[0-9]+)?')])],
    Largo: ['', Validators.compose([Validators.pattern('[0-9]*(.[0-9]+)?')])],
    Alto: ['', Validators.compose([ Validators.pattern('[0-9]*(.[0-9]+)?')])],
    Peso: ['', Validators.compose([ Validators.pattern('[0-9]*(.[0-9]+)?')])],
    IDTipo: [''],
    IDCliente: [''],
    IDDestinatarios: [''],
    IDSucursales: [''],
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

    if ($event !== 0 && this.searchOptionSelected.includes('Paquetes')){
      this.paquetesForm.get('IDPaquete')?.setValue($event.toString());
    }

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


  async updatePaquete(){
          
    let row = {
      'Desc': this.paquetesForm.value.Desc,
      'IDTipo': this.paquetesForm.value.IDTipo,
      'IDCliente': this.paquetesForm.value.IDCliente,
      'IDDestinatarios': this.paquetesForm.value.IDDestinatarios,
      'IDSucursales': this.paquetesForm.value.IDSucursales,
      'DetallesPaquete':{
        'Ancho': this.paquetesForm.value.Ancho,
        'Alto': this.paquetesForm.value.Alto,
        'Largo': this.paquetesForm.value.Largo,
        'Peso': this.paquetesForm.value.Peso,
        'EsFragil': this.Esfragil === ''? '': this.Esfragil === 'v'? 1:0,
      }
    }

    for (let key of Object.keys(row)){
      if (row[key as keyof typeof row] === '' || row[key as keyof typeof row] === null){
        delete row[key as keyof typeof row]
        console.log(row);
      }
    }

    for (let key of Object.keys(row['DetallesPaquete'])){
      if (row['DetallesPaquete'][key as keyof typeof row['DetallesPaquete']] === '' || row['DetallesPaquete'][key as keyof typeof row['DetallesPaquete']] === null){
        delete row['DetallesPaquete'][key as keyof typeof row['DetallesPaquete']]
        console.log(row);
      }
    }
    
    let Auxrow = JSON.stringify(row);

    await this.httpService.UpdateTable('Paquetes', JSON.parse(Auxrow), this.paquetesForm.value.IDPaquete || '');

    await this.paquetesForm.reset();

  }


  resetCliente(){
    this.paquetesForm.get('IDCliente')?.setValue('');
  }

  resetDestinatario(){
    this.paquetesForm.get('IDDestinatarios')?.setValue('');
  }

  resetSucursal(){
    this.paquetesForm.get('IDSucursales')?.setValue('');
  }

  resetTipos(){
    this.paquetesForm.get('IDTipo')?.setValue('');
  }

  changeEsfragil(){
    if (this.Esfragil == ''){
      this.Esfragil = 'v';
    }
    else if (this.Esfragil == 'f'){
      this.Esfragil = 'v';
    }
    else {
      this.Esfragil = 'f';
    }
  }



}
