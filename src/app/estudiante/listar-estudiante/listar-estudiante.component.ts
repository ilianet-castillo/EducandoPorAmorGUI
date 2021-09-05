import {Component, OnInit} from '@angular/core';
import {Estudiante} from '../../modelo/estudiante.model';
import {PageEvent} from '@angular/material/paginator';
import {EstudianteService} from '../estudiante.service';

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css']
})
export class ListarEstudianteComponent implements OnInit {

  estudiantes: Estudiante[];
  estudiantesFiltrados: Estudiante[];
  estudiantesPaginados: Estudiante[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private estudianteService: EstudianteService) {
  }

  ngOnInit(): void {
    this.estudianteService.peticionListar().subscribe(data => {
      this.estudiantes = (data as Estudiante[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  eliminarEstudiante(estudiante: Estudiante): void {
    this.estudianteService.peticionEliminarEstudiante(estudiante);
  }

  modificarEstudiante(estudiante: Estudiante): void {
    this.estudianteService.editarEstudiante(estudiante);
  }

  adicionarEstudiante(): void {
    this.estudianteService.adicionarEstudiante();
  }

  mostrarEstudiante(estudiante: Estudiante): void {
    this.estudianteService.mostrarEstudiante(estudiante);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.estudiantesPaginados = this.estudiantesFiltrados.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.estudiantesFiltrados = this.estudiantes.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.estudiantesFiltrados = this.estudiantes;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
