import {Component, OnInit} from '@angular/core';
import {ActivoAlumno} from '../../modelo/activo-alumno.model';
import {ActivoAlumnoService} from '../activo-alumno.service';

@Component({
  selector: 'app-mostrar-activosdealumnos',
  templateUrl: './mostrar-activo-alumno.component.html',
  styleUrls: ['./mostrar-activo-alumno.component.css']
})
export class MostrarActivoAlumnoComponent implements OnInit {

  activoAlumno: ActivoAlumno;

  constructor(private activoAlumnoService: ActivoAlumnoService) {
  }

  ngOnInit(): void {
    this.activoAlumnoService.peticionObtener().subscribe(data => {
      this.activoAlumno = data as ActivoAlumno;
    });
  }

  cancelar(): void {
    this.activoAlumnoService.listarActivosAlumno();
  }

  eliminarActivoAlumno(): void {
    this.activoAlumnoService.peticionEliminar(this.activoAlumno);
  }

  editarActivoAlumno(): void {
    this.activoAlumnoService.editarActivoAlumno(this.activoAlumno);
  }

  formatoFecha(fecha: Date): string {
    return this.activoAlumnoService.formatoFecha(fecha);
  }

}
