import {Component, OnInit} from '@angular/core';
import {ValorEvaluacion} from '../../modelo/valorevaluacion.model';
import {ValorEvaluacionService} from '../valor-evaluacion.service';

@Component({
  selector: 'app-mostrar-valor-evaluacion',
  templateUrl: './mostrar-valor-evaluacion.component.html',
  styleUrls: ['./mostrar-valor-evaluacion.component.css']
})
export class MostrarValorEvaluacionComponent implements OnInit {

  valorEvaluacion: ValorEvaluacion;

  constructor(private valorEvaluacionService: ValorEvaluacionService) {
  }

  ngOnInit(): void {
    this.valorEvaluacionService.peticionObtener().subscribe(data => {
      this.valorEvaluacion = data as ValorEvaluacion;
    });
  }

  cancelar(): void {
    this.valorEvaluacionService.listarValoresEvaluacion();
  }

  eliminarValorEvaluacion(): void {
    this.valorEvaluacionService.peticionEliminar(this.valorEvaluacion);
  }

  editarValorEvaluacion(): void {
    this.valorEvaluacionService.editarValorEvaluacion(this.valorEvaluacion);
  }

}
