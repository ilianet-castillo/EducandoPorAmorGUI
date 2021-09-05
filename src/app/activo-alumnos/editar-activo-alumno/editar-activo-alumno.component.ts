import {Component, OnInit} from '@angular/core';
import {Estudiante} from '../../modelo/estudiante.model';
import {Profesor} from '../../modelo/profesor.model';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivoAlumno} from '../../modelo/activo-alumno.model';
import {ActivoAlumnoService} from '../activo-alumno.service';

@Component({
  selector: 'app-editar-activodealumnos',
  templateUrl: './editar-activo-alumno.component.html',
  styleUrls: ['./editar-activo-alumno.component.css']
})
export class EditarActivoAlumnoComponent implements OnInit {

  editForm: FormGroup;
  estudiantesPresentes: Estudiante[];
  estdudiantesAusentes: Estudiante[];
  profesores: Profesor[];

  constructor(private activoAlumnoService: ActivoAlumnoService) {
    this.activoAlumnoService.obtenerEstudiantes().subscribe(data => {
      this.estudiantesPresentes = (data as Estudiante[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.estdudiantesAusentes = (data as Estudiante[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.activoAlumnoService.obtenerProfesores().subscribe(data => {
      this.profesores = (data as Profesor[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.editForm = this.activoAlumnoService.getForm();
    this.activoAlumnoService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
      this.editForm.setControl('fecha', new FormControl(new Date((data as ActivoAlumno).fecha.toString())));
    });
  }

  onSubmit() {
    this.activoAlumnoService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.activoAlumnoService.mostrarActivoAlumno(this.editForm.value);
  }

  esProfesorSeleccionado(profesor: Profesor): boolean {
    for (const profesorObject of (this.editForm.value as ActivoAlumno).profesores) {
      if (profesorObject.id === profesor.id) {
        return true;
      }
    }

    return false;
  }

  esEstudiantePresentesSeleccionado(estudiante: Estudiante): boolean {
    for (const estudianteObject of (this.editForm.value as ActivoAlumno).estudiantesPresentes) {
      if (estudianteObject.id === estudiante.id) {
        return true;
      }
    }

    return false;
  }

  esEstudianteAusentesSeleccionado(estudiante: Estudiante): boolean {
    for (const estudianteObject of (this.editForm.value as ActivoAlumno).estudiantesAusentes) {
      if (estudianteObject.id === estudiante.id) {
        return true;
      }
    }

    return false;
  }

}
