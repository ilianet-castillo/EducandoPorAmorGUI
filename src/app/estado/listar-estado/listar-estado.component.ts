import {Component, OnInit} from '@angular/core';
import {Estado} from '../../modelo/estado.model';
import {EstadoService} from '../estado.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {

  estados: Estado[];
  estadosFiltrados: Estado[];
  estadosPaginados: Estado[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private estadoService: EstadoService) {
  }

  ngOnInit(): void {
    this.estadoService.peticionListar().subscribe(data => {
      this.estados = (data as Estado[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  adicionarEstado(): void {
    this.estadoService.adicionarEstado();
  }

  mostrarEstado(estado: Estado): void {
    this.estadoService.mostrarEstado(estado);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.estadosPaginados = this.estadosFiltrados.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.estadosFiltrados = this.estados.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.estadosFiltrados = this.estados;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
