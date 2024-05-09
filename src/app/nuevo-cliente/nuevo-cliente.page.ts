import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.page.html',
  styleUrls: ['./nuevo-cliente.page.scss'],
})
export class NuevoClientePage implements OnInit {

  //Validators.pattern('[A-Za-z.+-]+@[A-Za-z]+.com') Validators.maxLength(40),
  clientesForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.clientesForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(40)])),
      apellidoP: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(40)])),
      apellidoM: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(40)])),
      correo: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.maxLength(40), 
        Validators.pattern('[A-Za-z.+-]+@[A-Za-z]+.com')])
      ),
      telefono: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(12)])),
  
    });
   }

  ngOnInit() {

  }

  mostrarDatos(f: NgForm) {
    window.alert(f.value)

  }

  show(f: NgForm){
    let a = f.valid
    window.alert(a)
  }

}
