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

  constructor(private http: ConnectionService, private formBuilder: FormBuilder) { 
    console.log(this.FechaEntrega)
  }

  entregasForm = this.formBuilder.group({
    'IDPaquetes': ['', Validators.required],
    'IDTransporte': ['', Validators.required],
  })

  ngOnInit() {
  }

  async changeSearchOptionSelected(str:string){
    this.searchOptionSelected = str;
    this.isModalOpen = true;
    this.canDismiss = false;
  }

  closeModal($event: number){
    this.isModalOpen = false;
    this.canDismiss = true;

    if ($event !== 0 && this.searchOptionSelected === 'Paquetes'){
      this.entregasForm.get('IDPaquetes')?.setValue($event.toString());
    } 

    if ($event !== 0 && this.searchOptionSelected === 'Transportes'){
      this.entregasForm.get('IDTransporte')?.setValue($event.toString());
    }
    
  }

  createEntrega(){
    let row= {
      'IDPaquetes': this.entregasForm.value.IDPaquetes,
      'IDTransporte': this.entregasForm.value.IDTransporte,
      'FechaEntrega': this.FechaEntrega,
      'FechaSalida': this.FechaSalida,
    }

    this.http.insertRow('Entregas', row);

    this.entregasForm.reset();
  }

}
