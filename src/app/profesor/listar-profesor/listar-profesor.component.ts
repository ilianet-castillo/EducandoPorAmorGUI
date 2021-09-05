import {Component, OnInit} from '@angular/core';
import {Profesor} from '../../modelo/profesor.model';
import {PageEvent} from '@angular/material/paginator';
import {ProfesorService} from '../profesor.service';

@Component({
  selector: 'app-listar-profesor',
  templateUrl: './listar-profesor.component.html',
  styleUrls: ['./listar-profesor.component.css']
})
export class ListarProfesorComponent implements OnInit {

  profesores: Profesor[];
  profesoresFiltrados: Profesor[];
  profesoresPaginados: Profesor[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private profesorService: ProfesorService) {
  }

  ngOnInit(): void {
    this.profesorService.peticionListar().subscribe(data => {
      this.profesores = (data as Profesor[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  eliminarProfesor(profesor: Profesor): void {
    this.profesorService.peticionEliminar(profesor);
  }

  modificarProfesor(profesor: Profesor): void {
    this.profesorService.editarProfesor(profesor);
  }

  adicionarProfesor(): void {
    this.profesorService.adicionarProfesor();
  }

  mostrarProfesor(profesor: Profesor): void {
    this.profesorService.mostrarProfesor(profesor);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.profesoresPaginados = this.profesoresFiltrados.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.profesoresFiltrados = this.profesores.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.profesoresFiltrados = this.profesores;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
