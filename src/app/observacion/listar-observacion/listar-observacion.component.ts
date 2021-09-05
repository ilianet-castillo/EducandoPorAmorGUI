import {Component, OnInit} from '@angular/core';
import {Observacion} from '../../modelo/observacion.model';
import {PageEvent} from '@angular/material/paginator';
import {ObservacionService} from '../observacion.service';

@Component({
  selector: 'app-listar-observacion',
  templateUrl: './listar-observacion.component.html',
  styleUrls: ['./listar-observacion.component.css']
})
export class ListarObservacionComponent implements OnInit {

  observaciones: Observacion[];
  observacionesFiltradas: Observacion[];
  observacionesPaginadas: Observacion[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private observacionService: ObservacionService) {
  }

  ngOnInit(): void {
    this.observacionService.peticionListar().subscribe(data => {
      this.observaciones = (data as Observacion[]).sort((a, b) => a.titulo > b.titulo ? 1 : -1);
      this.buscar(undefined);
    });
  }

  eliminarObservacion(observacion: Observacion): void {
    this.observacionService.peticionEliminarObservacion(observacion);
  }

  modificarObservacion(observacion: Observacion): void {
    this.observacionService.editarObservacion(observacion);
  }

  adicionarObservacion(): void {
    this.observacionService.adicionarObservacion();
  }

  mostrarObservacion(observacion: Observacion): void {
    this.observacionService.mostrarObservacion(observacion);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.observacionesPaginadas = this.observacionesFiltradas.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.observacionesFiltradas = this.observaciones.filter(s => {
        return s.titulo.includes(value);
      });
    } else {
      this.observacionesFiltradas = this.observaciones;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
