import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarEmpleadosComponent } from './agregar-empleados/agregar-empleados.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosService } from './empleados.service';



@NgModule({
  declarations: [
    AgregarEmpleadosComponent,
    ListaEmpleadosComponent,
    PaginaInicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PaginaInicioComponent,
    ListaEmpleadosComponent
  ],
  providers: [
    EmpleadosService
  ]
})
export class EmpleadosModule { }
