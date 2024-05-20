import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ISODateString } from '@capacitor/core';

@Component({
  selector: 'app-nueva-entrega',
  templateUrl: './nueva-entrega.page.html',
  styleUrls: ['./nueva-entrega.page.scss'],
})
export class NuevaEntregaPage implements OnInit {

  searchOptionSelected: string = '';
  isModalOpen: boolean = false;
  canDismiss: boolean = true;
  idSelectedPaquetes: string='';
  idSelectedTranportes: string='';
  FechaEntrega: string= new Date().toISOString().slice(0,-5);
  FechaSalida: string= new Date().toISOString().slice(0,-5);
  alertButtons = ['OK'];
  messagetitle = 'Ha ocurrido un error.';
  message = 'La información proporcionada no es válida o hay un error de conexion. Intente de nuevo.';

  constructor(private http: ConnectionService, private formBuilder: FormBuilder) { 
  }

  entregasForm = this.formBuilder.group({
    'IDPaquetes': ['', Validators.required],
    'IDTransporte': ['', Validators.required],
  })

  ngOnInit() {
  }

  async changeSearchOptionSelected(str:string){
    if (str.includes('Paquetes')){
      this.searchOptionSelected = str + 'Disponibles/0';
    }
    else{
      this.searchOptionSelected = str;
    }

    this.isModalOpen = true;
    this.canDismiss = false;
  }

  closeModal($event: number){
    this.isModalOpen = false;
    this.canDismiss = true;

    if ($event !== 0 && this.searchOptionSelected.includes('Paquetes')){
      this.entregasForm.get('IDPaquetes')?.setValue($event.toString());
    } 

    if ($event !== 0 && this.searchOptionSelected === 'Transportes'){
      this.entregasForm.get('IDTransporte')?.setValue($event.toString());
    }
    
  }

  async createEntrega(){
    try{
      let row= {
        'IDPaquetes': this.entregasForm.value.IDPaquetes,
        'IDTransporte': this.entregasForm.value.IDTransporte,
        'FechaEntrega': this.FechaEntrega,
        'FechaSalida': this.FechaSalida,
      }
  
      this.http.insertRow('Entregas', row);
      
      this.messagetitle = 'Se ha realizado la operacion con éxito';
      this.message = '';
      await this.entregasForm.reset();
    }
    catch (err){
      this.messagetitle = 'Ha ocurrido un error.';
      this.message = 'La información proporcionada no es válida o hay un error de conexion. Intente de nuevo.';
    }

  }

}
