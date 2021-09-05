import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {GrupoDocenteService} from '../grupo-docente.service';
import {GrupoDocente} from '../../modelo/grupodocente.model';

@Component({
  selector: 'app-listar-grupodocente',
  templateUrl: './listar-grupo-docente.component.html',
  styleUrls: ['./listar-grupo-docente.component.css']
})
export class ListarGrupoDocenteComponent implements OnInit {

  grupoDocentes: GrupoDocente[];
  grupoDocentesFiltrados: GrupoDocente[];
  grupoDocentesPaginados: GrupoDocente[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private grupoDocenteService: GrupoDocenteService) {
  }

  ngOnInit(): void {
    this.grupoDocenteService.peticionListar().subscribe(data => {
      this.grupoDocentes = (data as GrupoDocente[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  eliminarGrupoDocente(grupoDocente: GrupoDocente): void {
    this.grupoDocenteService.peticionEliminar(grupoDocente);
  }

  editarGrupoDocente(grupoDocente: GrupoDocente): void {
    this.grupoDocenteService.editarGrupoDocente(grupoDocente);
  }

  adicionarGrupoDocente(): void {
    this.grupoDocenteService.adicionarGrupoDocente();
  }

  mostrarGrupoDocente(grupoDocente: GrupoDocente): void {
    this.grupoDocenteService.mostrarGrupoDocente(grupoDocente);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.grupoDocentesPaginados = this.grupoDocentesFiltrados.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.grupoDocentesFiltrados = this.grupoDocentes.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.grupoDocentesFiltrados = this.grupoDocentes;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
