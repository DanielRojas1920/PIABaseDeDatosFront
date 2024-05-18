import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent  implements OnInit {

  @Input() tableName: string='';

  rows : any[] = [];
  atributes : any;
  idSelected: number = 0;
  lenghtCol : number=0;

  @Output() closeModal= new EventEmitter<number>();

  constructor(private http: ConnectionService) { }

  async ngOnInit() {
    await this.loadRows();
  }

  EmitCloseModal(){
    this.closeModal.emit(this.idSelected);
  }

  async loadRows(){
      this.http.getRows(this.tableName).then((response) => {
        response.subscribe((data) => {
          let aux = (data as Array<any>)
          let auxRow:any;
          for (let i = 0; i<aux.length; i++) {
            auxRow = Object.values(aux[i]).map((value:any) => {
              if (typeof value === 'object'){
                return Object.values(value).slice(1);
              }
              else{
                return value;
              }
            }).reduce((acc,val) => acc.concat(val),[]);
            this.rows.push(auxRow);
          }
          auxRow = Object.keys(aux[0])
          this.atributes = Object.keys(aux[0]).map((key:any) => {
            if (key.slice(0,2)=== 'ID' && key !== auxRow[0]){
              if (typeof aux[0][key] === 'object')
                return Object.keys(aux[0][key]).slice(1);
              else
                return key;
            }
            else{
              return key;
            }
          }).reduce((acc,val) => acc.concat(val), [])
          this.lenghtCol= this.atributes.length;
        })
      })
  }

  asignIdSelected(id: number){
    this.idSelected = id;
  }

}
