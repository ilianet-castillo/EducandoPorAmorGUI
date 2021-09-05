import {Component, OnInit} from '@angular/core';
import {ValorEvaluacion} from '../../modelo/valorevaluacion.model';
import {ValorEvaluacionService} from '../valor-evaluacion.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-listar-valorevaluacion',
  templateUrl: './listar-valor-evaluacion.component.html',
  styleUrls: ['./listar-valor-evaluacion.component.css']
})
export class ListarValorEvaluacionComponent implements OnInit {

  valoresEvaluacion: ValorEvaluacion[];
  valoresEvaluacionFiltrados: ValorEvaluacion[];
  valoresEvaluacionPaginados: ValorEvaluacion[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private valorEvaluacionService: ValorEvaluacionService) {
  }

  ngOnInit(): void {
    this.valorEvaluacionService.peticionListar().subscribe(data => {
      this.valoresEvaluacion = (data as ValorEvaluacion[]).sort((a, b) => a.valor > b.valor ? 1 : -1);
      this.buscar(undefined);
    });
  }

  adicionarValorEvaluacion(): void {
    this.valorEvaluacionService.adicionarValorEvaluacion();
  }

  mostrarValorEvaluacion(facultad: ValorEvaluacion): void {
    this.valorEvaluacionService.mostrarValorEvaluacion(facultad);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.valoresEvaluacionPaginados = this.valoresEvaluacionFiltrados.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.valoresEvaluacionFiltrados = this.valoresEvaluacion.filter(s => {
        return s.valor.includes(value);
      });
    } else {
      this.valoresEvaluacionFiltrados = this.valoresEvaluacion;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
