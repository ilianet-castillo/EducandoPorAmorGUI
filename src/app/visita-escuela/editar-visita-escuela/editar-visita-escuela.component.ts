import {Component, OnInit} from '@angular/core';
import {Estudiante} from '../../modelo/estudiante.model';
import {Provincia} from '../../modelo/provincia.model';
import {Escuela} from '../../modelo/escuela.model';
import {Profesor} from '../../modelo/profesor.model';
import {Observacion} from '../../modelo/observacion.model';
import {NombreAnno} from '../../modelo/nombreanno.model';
import {FormControl, FormGroup} from '@angular/forms';
import {VisitaEscuela} from '../../modelo/visitaescuela.model';
import {VisitaEscuelaService} from '../visita-escuela.service';

@Component({
  selector: 'app-editar-visitaescuela',
  templateUrl: './editar-visita-escuela.component.html',
  styleUrls: ['./editar-visita-escuela.component.css']
})
export class EditarVisitaEscuelaComponent implements OnInit {

  editForm: FormGroup;
  provincias: Provincia[];
  nombreAnnos: NombreAnno[];
  escuelas: Escuela[];
  estudiantes: Estudiante[];
  observaciones: Observacion[];
  profesores: Profesor[];

  constructor(private visitaEscuelaService: VisitaEscuelaService) {
    this.visitaEscuelaService.obtenerProvincias().subscribe(data => {
      this.provincias = (data as Provincia[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.visitaEscuelaService.obtenerNombresAnno().subscribe(data => {
      this.nombreAnnos = (data as NombreAnno[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.visitaEscuelaService.obtenerEscuelas().subscribe(data => {
      this.escuelas = (data as Escuela[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.visitaEscuelaService.obtenerEstudiantes().subscribe(data => {
      this.estudiantes = (data as Estudiante[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.visitaEscuelaService.obtenerObservaciones().subscribe(data => {
      this.observaciones = (data as Observacion[]).sort((a, b) => a.titulo > b.titulo ? 1 : -1);
    });

    this.visitaEscuelaService.obtenerProfesores().subscribe(data => {
      this.profesores = (data as Profesor[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.editForm = this.visitaEscuelaService.getForm();
    this.visitaEscuelaService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
      this.editForm.setControl('fecha', new FormControl(new Date((data as VisitaEscuela).fecha.toString())));
    });
  }

  onSubmit() {
    this.visitaEscuelaService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.visitaEscuelaService.mostrarVisitaEscuela(this.editForm.value);
  }

  esProvinciaSeleccionada(provincia: Provincia): boolean {
    return (this.editForm.value as VisitaEscuela).provincia.id === provincia.id;
  }

  esNombreAnnoSeleccionado(nombreAnno: NombreAnno): boolean {
    return (this.editForm.value as VisitaEscuela).nombreAnno.id === nombreAnno.id;
  }

  esEscuelaSeleccionada(escuela: Escuela): boolean {
    return (this.editForm.value as VisitaEscuela).escuela.id === escuela.id;
  }

  esEstudianteSeleccionado(estudiante: Estudiante): boolean {
    for (const estudianteObject of (this.editForm.value as VisitaEscuela).estudiantes) {
      if (estudianteObject.id === estudiante.id) {
        return true;
      }
    }
    return false;
  }

  esObservacionSeleccionada(observacion: Observacion): boolean {
    return (this.editForm.value as VisitaEscuela).observacion.id === observacion.id;
  }

  esProfesorSeleccionado(profesor: Profesor): boolean {
    return (this.editForm.value as VisitaEscuela).profesor.id === profesor.id;
  }

}
