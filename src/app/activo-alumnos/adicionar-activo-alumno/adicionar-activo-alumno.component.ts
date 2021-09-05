import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Estudiante} from '../../modelo/estudiante.model';
import {Profesor} from '../../modelo/profesor.model';
import {ActivoAlumnoService} from '../activo-alumno.service';

@Component({
  selector: 'app-adicionar-activodealumnos',
  templateUrl: './adicionar-activo-alumno.component.html',
  styleUrls: ['./adicionar-activo-alumno.component.css']
})
export class AdicionarActivoAlumnoComponent implements OnInit {

  addForm: FormGroup;
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
    this.addForm = this.activoAlumnoService.getForm();
  }

  onSubmit() {
    this.activoAlumnoService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.activoAlumnoService.listarActivosAlumno();
  }

}
