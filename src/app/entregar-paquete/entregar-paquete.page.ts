import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-entregar-paquete',
  templateUrl: './entregar-paquete.page.html',
  styleUrls: ['./entregar-paquete.page.scss'],
})
export class EntregarPaquetePage implements OnInit {

  searchOptionSelected: string = '';
  isModalOpen: boolean = false;
  canDismiss: boolean = true;
  idSelectedPaquetes: string='';
  FechaEntrega: string= new Date().toISOString().slice(0,-5);
  alertButtons = ['OK'];
  messagetitle = 'Ha ocurrido un error.';
  message = 'La información proporcionada no es válida o hay un error de conexion. Intente de nuevo.';

  constructor(private http: ConnectionService, private formBuilder: FormBuilder) { 
  }

  EntregarPaqueteForm = this.formBuilder.group({
    'IDPaquetes': ['', Validators.required],
  })

  ngOnInit() {
  }

  async changeSearchOptionSelected(str:string){
    this.searchOptionSelected = str + 'Disponibles/2';
    this.isModalOpen = true;
    this.canDismiss = false;
  }

  closeModal($event: number){
    this.isModalOpen = false;
    this.canDismiss = true;

    if ($event !== 0 && this.searchOptionSelected.includes('Paquetes')){
      this.EntregarPaqueteForm.get('IDPaquetes')?.setValue($event.toString());
    }
    
  }

  async entregarPaquete(){
    let data = {
      'IDPaquete': this.EntregarPaqueteForm.value.IDPaquetes,
      'FechaEntrega': this.FechaEntrega,
    }
    await this.http.insertRow('EntregarPaquete', data);
    await this.EntregarPaqueteForm.reset();
  }
}

