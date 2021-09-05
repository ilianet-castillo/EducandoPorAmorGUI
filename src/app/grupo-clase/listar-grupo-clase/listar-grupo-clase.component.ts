import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {GrupoClase} from '../../modelo/grupoclase.model';
import {GrupoClaseService} from '../grupo-clase.service';

@Component({
  selector: 'app-listar-grupoclase',
  templateUrl: './listar-grupo-clase.component.html',
  styleUrls: ['./listar-grupo-clase.component.css']
})
export class ListarGrupoClaseComponent implements OnInit {

  gruposClase: GrupoClase[];
  gruposClaseFiltrados: GrupoClase[];
  gruposClasePaginados: GrupoClase[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private grupoClaseService: GrupoClaseService) {
  }

  ngOnInit(): void {
    this.grupoClaseService.peticionListar().subscribe(data => {
      this.gruposClase = (data as GrupoClase[]).sort((a, b) => a.asignatura.nombre > b.asignatura.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  adicionarGrupoClase(): void {
    this.grupoClaseService.adicionarGrupoClase();
  }

  mostrarGrupoClase(grupoClase: GrupoClase): void {
    this.grupoClaseService.mostrarGrupoClase(grupoClase);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.gruposClasePaginados = this.gruposClaseFiltrados.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.gruposClaseFiltrados = this.gruposClase.filter(s => {
        return s.asignatura.nombre.includes(value);
      });
    } else {
      this.gruposClaseFiltrados = this.gruposClase;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
