import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-destinatario',
  templateUrl: './create-destinatario.component.html',
  styleUrls: ['./create-destinatario.component.scss'],
})
export class CreateDestinatarioComponent  implements OnInit {
  @Output() closeModal= new EventEmitter<number>();

  Paises:any;
  Estados:any;
  idCP: string = '';
  isModalOpenChild: boolean=false;
  canDismissChild: boolean=true;
  searchString: string= 'CP';

  destinatarioForm = this.formBuilder.group({
    Nombre: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
    ApellidoP: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
    ApellidoM: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
    Correo: ['', Validators.compose([Validators.required, Validators.pattern('[0-9a-zA-Z-.]*@[A-za-z]*.com')])],
    Telefono: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
    IDPais: ['', Validators.required],
    IDEstado: ['', Validators.required],
    IDCP: ['', Validators.required],
    Calle: ['', Validators.required],
    Numero: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
  })


  constructor(private http:ConnectionService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.http.getRows('Paises').then((response) => {
      response.subscribe((data) => {
        this.Paises= data;
      })
    });
    this.http.getRows('Estados').then((response) => {
      response.subscribe((data) => {
        this.Estados= data;
      })
    });
  }

  EmitCloseModal(){
    this.closeModal.emit(0);
  }

  async createDestinatario(){

    let claveRecepcion = this.getRandomInt(1000,9999).toString()


    let row = {
      'Nombre': this.destinatarioForm.value.Nombre,
      'ApellidoP': this.destinatarioForm.value.ApellidoP,
      'ApellidoM': this.destinatarioForm.value.ApellidoM,
      'Correo': this.destinatarioForm.value.Correo,
      'Telefono': this.destinatarioForm.value.Telefono,
      'IDPais': parseInt(this.destinatarioForm.value.IDPais || '',10),
      'IDEstado': parseInt(this.destinatarioForm.value.IDEstado || '',10),
      'IDCP': parseInt(this.destinatarioForm.value.IDCP || '',10),
      'Calle': this.destinatarioForm.value.Calle,
      'Numero': parseInt(this.destinatarioForm.value.Numero || '',10),
      'ClaveRecepcion': claveRecepcion,
    };
    await this.http.insertRow('Destinatarios', row);
    this.destinatarioForm.reset();
  }

  searchOptionSelected(){
    this.isModalOpenChild = true;
    this.canDismissChild = false;
  }

  closeModalChild($event: number){
    this.isModalOpenChild = false;
    this.canDismissChild = true;

    if ($event !== 0){
      this.destinatarioForm.get('IDCP')?.setValue($event.toString());
    } 
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
