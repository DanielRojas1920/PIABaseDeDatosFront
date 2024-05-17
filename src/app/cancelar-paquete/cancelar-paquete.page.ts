import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cancelar-paquete',
  templateUrl: './cancelar-paquete.page.html',
  styleUrls: ['./cancelar-paquete.page.scss'],
})
export class CancelarPaquetePage implements OnInit {

  searchOptionSelected: string = '';
  isModalOpen: boolean = false;
  canDismiss: boolean = true;
  idSelectedPaquetes: string='';

  constructor(private http: ConnectionService, private formBuilder: FormBuilder) { 
  }

  cancelarPaqueteForm = this.formBuilder.group({
    'IDPaquetes': ['', Validators.required],
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
      this.cancelarPaqueteForm.get('IDPaquetes')?.setValue($event.toString());
    }
    
  }

  async deletePaquete(){
    let idPaquete = Number(this.cancelarPaqueteForm.value.IDPaquetes);
    await this.http.cancelPaquete('Paquetes', idPaquete);
    this.cancelarPaqueteForm.reset();
  }
}
