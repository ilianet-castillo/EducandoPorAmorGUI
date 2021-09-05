import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Estado} from '../../modelo/estado.model';
import {Facultad} from '../../modelo/facultad.model';
import {Militancia} from '../../modelo/militancia.model';
import {Escuela} from '../../modelo/escuela.model';
import {GradoEscolar} from '../../modelo/gradoescolar.model';
import {GrupoClase} from '../../modelo/grupoclase.model';
import {EstudianteService} from '../estudiante.service';
import {Estudiante} from '../../modelo/estudiante.model';
import {Evaluacion} from '../../modelo/evaluacion.model';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {

  editForm: FormGroup;
  estados: Estado[];
  facultades: Facultad[];
  gradosEscolar: GradoEscolar[];
  militancias: Militancia[];
  escuelas: Escuela[];
  gruposClase: GrupoClase[];
  evaluaciones: Evaluacion[];

  constructor(private estudianteService: EstudianteService) {
    this.estudianteService.obtenerEstados().subscribe(data => {
      this.estados = (data as Estado[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.estudianteService.obtenerFacultades().subscribe(data => {
      this.facultades = (data as Facultad[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.estudianteService.obtenerGradosEscolar().subscribe(data => {
      this.gradosEscolar = (data as GradoEscolar[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.estudianteService.obtenerMilitancias().subscribe(data => {
      this.militancias = (data as Militancia[]).sort((a, b) => a.tipo > b.tipo ? 1 : -1);
    });

    this.estudianteService.obtenerEscuelas().subscribe(data => {
      this.escuelas = (data as Escuela[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.estudianteService.obtenerGruposClase().subscribe(data => {
      this.gruposClase = (data as GrupoClase[]).sort((a, b) => a.grupoDocente > b.grupoDocente ? 1 : -1);
    });

    this.estudianteService.obtenerEvaluaciones().subscribe(data => {
      this.evaluaciones = (data as Evaluacion[]).sort((a, b) => a.fecha > b.fecha ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.editForm = this.estudianteService.getFormEstudiante();
    this.estudianteService.peticionObtenerEstudiante().subscribe(data => {
      this.editForm.setValue(data);
      if ((data as Estudiante).grupoClase) {
        this.gruposClase.push((data as Estudiante).grupoClase);
      }
    });
  }

  onSubmit() {
    this.estudianteService.peticionActualizarEstudiante(this.editForm);
  }

  cancelar(): void {
    this.estudianteService.mostrarEstudiante(this.editForm.value);
  }

  esEstadoSeleccionado(estado: Estado): boolean {
    return (this.editForm.value as Estudiante).estado.id === estado.id;
  }

  esFacultadSeleccionada(facultad: Facultad): boolean {
    return (this.editForm.value as Estudiante).facultad.id === facultad.id;
  }

  esGradoEscolarSeleccionado(gradoEscolar: GradoEscolar): boolean {
    return (this.editForm.value as Estudiante).gradoEscolar.id === gradoEscolar.id;
  }

  esMilitanciaSeleccionada(militancia: Militancia): boolean {
    return (this.editForm.value as Estudiante).militancia.id === militancia.id;
  }

  esEscuelaSeleccionada(escuela: Escuela): boolean {
    const editEscuela = (this.editForm.value as Estudiante).escuela;
    return editEscuela && editEscuela.id === escuela.id;
  }

  esGrupoClaseSeleccionado(grupoClase: GrupoClase): boolean {
    const editGrupoClase = (this.editForm.value as Estudiante).grupoClase;
    return editGrupoClase && editGrupoClase.id === grupoClase.id;
  }

  formatoFecha(fecha: Date): string {
    return this.estudianteService.formatoFecha(fecha);
  }

  adicionarEvaluacion(): void {
    this.estudianteService.adicionarEvaluacion();
  }

  eliminarEvaluacion(evaluacion: Evaluacion): void {
    this.estudianteService.peticionEliminarEvaluacion(evaluacion);
  }

  editarEvaluacion(evaluacion: Evaluacion): void {
    this.estudianteService.editarEvaluacion(evaluacion);
  }

}
