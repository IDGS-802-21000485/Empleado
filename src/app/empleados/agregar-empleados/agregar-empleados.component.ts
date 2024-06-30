import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleados';

@Component({
  selector: 'app-agregar-empleados',
  templateUrl: './agregar-empleados.component.html',
  styleUrl: './agregar-empleados.component.css'
})
export class AgregarEmpleadosComponent {

  nuevo: IEmpleado ={
    n_Empleado: "",
    nombre: "",
    correo: "",
    telefono: "",
    fecha_N: "",
    sexo: ""

  }


  constructor(private EmpleadosService: EmpleadosService) { }

  agregar(){
    console.log("Entra a la validaciones");
    
    if (this.nuevo.n_Empleado.trim().length===0) {
      return;
    }

    if (this.nuevo.nombre.trim().length===0) {
      return;
    }

    if (this.nuevo.correo.trim().length===0) {
      return;
    }

    if (this.nuevo.telefono.trim().length===0) {
      return;
    }

    if (this.nuevo.fecha_N.trim().length===0) {
      return;
    }

    this.EmpleadosService.agregarEmpleado(this.nuevo)
    console.log("Entro", this.nuevo);
    
      this.nuevo = {
        n_Empleado: "",
        nombre: "",
        correo: "",
        telefono: "",
        fecha_N: "",
        sexo: ""
      }
    
  }
}
