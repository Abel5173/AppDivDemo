import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormControlComponent } from './form-control/form-control.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'form-control-component', component: FormControlComponent},
  {path: 'table-component', component: TableComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
