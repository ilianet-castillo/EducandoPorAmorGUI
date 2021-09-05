import {Component, OnInit} from '@angular/core';
import {Asignatura} from '../../modelo/asignatura.model';
import {PageEvent} from '@angular/material/paginator';
import {AsignaturaService} from '../asignatura.service';

@Component({
  selector: 'app-listar-asignatura',
  templateUrl: './listar-asignatura.component.html',
  styleUrls: ['./listar-asignatura.component.css']
})
export class ListarAsignaturaComponent implements OnInit {

  asignaturas: Asignatura[];
  asignaturasFiltradas: Asignatura[];
  asignaturasPaginadas: Asignatura[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private asignaturaService: AsignaturaService) {
  }

  ngOnInit(): void {
    this.asignaturaService.peticionListar().subscribe(data => {
      this.asignaturas = (data as Asignatura[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  adicionarAsignatura(): void {
    this.asignaturaService.adicionarAsignatura();
  }

  mostrarAsignatura(asignatura: Asignatura): void {
    this.asignaturaService.mostrarAsignatura(asignatura);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.asignaturasPaginadas = this.asignaturasFiltradas.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.asignaturasFiltradas = this.asignaturas.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.asignaturasFiltradas = this.asignaturas;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
