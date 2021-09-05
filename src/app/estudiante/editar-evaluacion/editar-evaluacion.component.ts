import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Estudiante} from '../../modelo/estudiante.model';
import {ValorEvaluacion} from '../../modelo/valorevaluacion.model';
import {Evaluacion} from '../../modelo/evaluacion.model';
import {EstudianteService} from '../estudiante.service';

@Component({
  selector: 'app-editar-evaluacion',
  templateUrl: './editar-evaluacion.component.html',
  styleUrls: ['./editar-evaluacion.component.css']
})
export class EditarEvaluacionComponent implements OnInit {

  editForm: FormGroup;
  estudiante: Estudiante;
  valorEvaluaciones: ValorEvaluacion[];

  constructor(private estudianteService: EstudianteService) {
    this.estudianteService.peticionObtenerEstudiante().subscribe(data => {
      this.estudiante = (data as Estudiante);
    });

    this.estudianteService.obtenerValoresEvaluacion().subscribe(data => {
      this.valorEvaluaciones = (data as ValorEvaluacion[]).sort((a, b) => a.valor > b.valor ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.editForm = this.estudianteService.getFormEvaluacion();
    this.estudianteService.peticionObtenerEvaluacion().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.estudianteService.peticionActualizarEvaluacion(this.editForm);
  }

  cancelar(): void {
    this.estudianteService.editarEstudiante(this.estudiante);
  }

  esValorEvaluacionSeleccionado(valorEvaluacion: ValorEvaluacion): boolean {
    return (this.editForm.value as Evaluacion).valorEvaluacion.id === valorEvaluacion.id;
  }

  formatoFecha(): string {
    return this.estudianteService.formatoFecha((this.editForm.value as Evaluacion).fecha);
  }

}
