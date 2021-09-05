import {Component, OnInit} from '@angular/core';
import {Escuela} from '../../modelo/escuela.model';
import {EscuelaService} from '../escuela.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-listar-escuela',
  templateUrl: './listar-escuela.component.html',
  styleUrls: ['./listar-escuela.component.css']
})
export class ListarEscuelaComponent implements OnInit {

  escuelas: Escuela[];
  escuelasFiltradas: Escuela[];
  escuelasPaginadas: Escuela[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private escuelaService: EscuelaService) {
  }

  ngOnInit(): void {
    this.escuelaService.peticionListar().subscribe(data => {
      this.escuelas = (data as Escuela[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  eliminarEscuela(escuela: Escuela): void {
    this.escuelaService.peticionEliminar(escuela);
  }

  modificarEscuela(escuela: Escuela): void {
    this.escuelaService.editarEscuela(escuela);
  }

  adicionarEscuela(): void {
    this.escuelaService.adicionarEscuela();
  }

  mostrarEscuela(escuela: Escuela): void {
    this.escuelaService.mostrarEscuela(escuela);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.escuelasPaginadas = this.escuelasFiltradas.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.escuelasFiltradas = this.escuelas.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.escuelasFiltradas = this.escuelas;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
