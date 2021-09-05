import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Provincia} from '../../modelo/provincia.model';
import {Estudiante} from '../../modelo/estudiante.model';
import {Escuela} from '../../modelo/escuela.model';
import {Profesor} from '../../modelo/profesor.model';
import {NombreAnno} from '../../modelo/nombreanno.model';
import {Observacion} from '../../modelo/observacion.model';
import {VisitaEscuelaService} from '../visita-escuela.service';

@Component({
  selector: 'app-adicionar-visitaescuela',
  templateUrl: './adicionar-visita-escuela.component.html',
  styleUrls: ['./adicionar-visita-escuela.component.css']
})
export class AdicionarVisitaEscuelaComponent implements OnInit {

  addForm: FormGroup;
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
    this.addForm = this.visitaEscuelaService.getForm();
  }

  onSubmit() {
    this.visitaEscuelaService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.visitaEscuelaService.listarVisitaEscuela();
  }

}
