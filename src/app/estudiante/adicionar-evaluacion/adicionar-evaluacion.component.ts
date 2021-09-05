import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Estudiante} from '../../modelo/estudiante.model';
import {ValorEvaluacion} from '../../modelo/valorevaluacion.model';
import {Evaluacion} from '../../modelo/evaluacion.model';
import {EstudianteService} from '../estudiante.service';

@Component({
  selector: 'app-adicionar-evaluacion',
  templateUrl: './adicionar-evaluacion.component.html',
  styleUrls: ['./adicionar-evaluacion.component.css']
})
export class AdicionarEvaluacionComponent implements OnInit {

  addForm: FormGroup;
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
    this.addForm = this.estudianteService.getFormEvaluacion();
  }

  onSubmit() {
    (this.addForm.value as Evaluacion).estudiante = this.estudiante;
    this.estudianteService.peticionAdicionarEvaluacion(this.addForm);
  }

  cancelar(): void {
    this.estudianteService.editarEstudiante(this.estudiante);
  }

}
