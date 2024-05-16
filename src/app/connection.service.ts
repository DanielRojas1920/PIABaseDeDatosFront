import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ControlContainer } from '@angular/forms';

interface Tables{
  'Clientes': any;
  'Tipos': any;
  'EstadoPaquete': any;
}

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  tables: Tables ={
    'Clientes': [],
    'Tipos':[],
    'EstadoPaquete':[],
  }


  constructor(private http: HttpClient) {
    this.getRows('Tipos');
    this.getRows('EstadoPaquete');
  }

  async getRows(table: string){
    return this.http.get('http://localhost:3000/general/'+table)
  }

  async insertRow(table: string, body: any){
    this.http.post('http://localhost:3000/general/'+table, body=body).subscribe((data => {
      return data
    }));
  }
}

  



