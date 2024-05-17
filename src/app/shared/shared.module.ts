import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from '../search-result/search-result.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [SearchResultComponent],
})
export class SharedModule { }
