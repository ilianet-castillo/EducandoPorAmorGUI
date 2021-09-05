import {Component, OnInit} from '@angular/core';
import {Estudiante} from '../../modelo/estudiante.model';
import {EstudianteService} from '../estudiante.service';
import {Evaluacion} from '../../modelo/evaluacion.model';

@Component({
  selector: 'app-mostrar-estudiante',
  templateUrl: './mostrar-estudiante.component.html',
  styleUrls: ['./mostrar-estudiante.component.css']
})
export class MostrarEstudianteComponent implements OnInit {

  estudiante: Estudiante;
  evaluaciones: Evaluacion[];

  constructor(private estudianteService: EstudianteService) {
    this.estudianteService.obtenerEvaluaciones().subscribe(data => {
      this.evaluaciones = (data as Evaluacion[]).sort((a, b) => a.fecha > b.fecha ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.estudianteService.peticionObtenerEstudiante().subscribe(data => {
      this.estudiante = data as Estudiante;
    });
  }

  cancelar(): void {
    this.estudianteService.listarEstudiantes();
  }

  eliminarEstudiante(): void {
    this.estudianteService.peticionEliminarEstudiante(this.estudiante);
  }

  editarEstudiante(): void {
    this.estudianteService.editarEstudiante(this.estudiante);
  }

  formatoFecha(fecha: Date): string {
    return this.estudianteService.formatoFecha(fecha);
  }

}
