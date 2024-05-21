import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-update-destinatario',
  templateUrl: './update-destinatario.page.html',
  styleUrls: ['./update-destinatario.page.scss'],
})
export class UpdateDestinatarioPage implements OnInit {

  @Output() closeModal= new EventEmitter<number>();

  Paises:any;
  Estados:any;
  idCP: string = '';
  isModalOpenChild: boolean=false;
  canDismissChild: boolean=true;
  searchString: string='';
  

  destinatarioForm = this.formBuilder.group({
    IDDestinatarios: ['', Validators.required],
    Nombre: ['', Validators.compose([Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚ]*( [a-zA-ZáéíóúÁÉÍÓÚ]+)?')])],
    ApellidoP: ['', Validators.compose([Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚ]*( [a-zA-ZáéíóúÁÉÍÓÚ]+)?')])],
    ApellidoM: ['', Validators.compose([ Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚ]*( [a-zA-ZáéíóúÁÉÍÓÚ]+)?')])],
    Correo: ['', Validators.compose([Validators.pattern('[0-9a-zA-Z-.]*@[A-za-z]*.com')])],
    Telefono: ['', Validators.compose([ Validators.pattern('[0-9]*')])],
    IDPais: [''],
    IDEstado: [''],
    IDCP: [''],
    Calle: [''],
    Numero: ['', Validators.compose([ Validators.pattern('[0-9]*')])],
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

  async updateDestinatario(){

      let row = {
        'Nombre': this.destinatarioForm.value.Nombre,
        'ApellidoP': this.destinatarioForm.value.ApellidoP,
        'ApellidoM': this.destinatarioForm.value.ApellidoM,
        'Correo': this.destinatarioForm.value.Correo,
        'Telefono': this.destinatarioForm.value.Telefono,
        'Numero': this.destinatarioForm.value.Numero,
        'Calle': this.destinatarioForm.value.Calle,
        'IDPais': this.destinatarioForm.value.IDPais,
        'IDEstado': this.destinatarioForm.value.IDEstado,
        'IDCP': this.destinatarioForm.value.IDCP,
      };
  
      for (let key of Object.keys(row)){
        if (row[key as keyof typeof row] === '' || row[key as keyof typeof row] === null){
          delete row[key as keyof typeof row]
        }
      }
  
      let Auxrow = JSON.stringify(row, null, 4);

  
      await this.http.UpdateTable('Destinatarios', JSON.parse(Auxrow), this.destinatarioForm.value.IDDestinatarios || '');
  
      await this.destinatarioForm.reset()


  }

  changeSearchOptionSelected(table: string){
    this.searchString = table;
    this.isModalOpenChild = true;
    this.canDismissChild = false;
  }

  closeModalChild($event: number){
    this.isModalOpenChild = false;
    this.canDismissChild = true;

    if ($event !== 0 && this.searchString === 'CP'){
      this.destinatarioForm.get('IDCP')?.setValue($event.toString());
    }
    else if ($event !== 0)
      this.destinatarioForm.get('IDDestinatarios')?.setValue($event.toString());
  }

  resetEstado(){
    this.destinatarioForm.get('IDEstado')?.setValue('');
  }

  resetPais(){
    this.destinatarioForm.get('IDPais')?.setValue('');
  }

  resetCP(){
    this.destinatarioForm.get('IDCP')?.setValue('');
  }

}
