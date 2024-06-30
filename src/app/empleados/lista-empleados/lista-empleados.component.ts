import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleados';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent {

  constructor(private EmpleadosService: EmpleadosService) { }

  //* Definimos un metodo get para obtener la lista de clientes desde el servicio
  get empleados(): IEmpleado[]{

  return this.EmpleadosService.empleados;
  }
}
