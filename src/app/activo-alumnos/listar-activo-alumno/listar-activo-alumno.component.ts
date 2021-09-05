import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {ActivoAlumno} from '../../modelo/activo-alumno.model';
import {ActivoAlumnoService} from '../activo-alumno.service';

@Component({
  selector: 'app-listar-activodealumnos',
  templateUrl: './listar-activo-alumno.component.html',
  styleUrls: ['./listar-activo-alumno.component.css']
})
export class ListarActivoAlumnoComponent implements OnInit {

  activosAlumnos: ActivoAlumno[];
  activosAlumnosFiltrados: ActivoAlumno[];
  activosAlumnosPaginados: ActivoAlumno[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private activoAlumnoService: ActivoAlumnoService) {
  }

  ngOnInit(): void {
    this.activoAlumnoService.peticionListar().subscribe(data => {
      this.activosAlumnos = (data as ActivoAlumno[]).sort((a, b) => a.fecha > b.fecha ? 1 : -1);
      this.buscar(undefined);
    });
  }

  adicionarActivoAlumno(): void {
    this.activoAlumnoService.adicionarActivoAlumno();
  }

  mostrarActivoAlumno(activoAlumno: ActivoAlumno): void {
    this.activoAlumnoService.mostrarActivoAlumno(activoAlumno);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.activosAlumnosPaginados = this.activosAlumnosFiltrados.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(event: MatDatepickerInputEvent<Date>) {
    let date;
    if (event) {
      date = this.activoAlumnoService.formatoFecha(event.value);
    }

    if (date) {
      this.activosAlumnosFiltrados = this.activosAlumnos.filter(s => {
        return this.activoAlumnoService.formatoFecha(s.fecha) === date;
      });
    } else {
      this.activosAlumnosFiltrados = this.activosAlumnos;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

  formatoFecha(fecha: Date): string {
    return this.activoAlumnoService.formatoFecha(fecha);
  }

}
