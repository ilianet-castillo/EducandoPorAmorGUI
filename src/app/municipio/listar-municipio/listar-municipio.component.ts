import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {Municipio} from '../../modelo/municipio.model';
import {MunicipioService} from '../municipio.service';

@Component({
  selector: 'app-listar-municipio',
  templateUrl: './listar-municipio.component.html',
  styleUrls: ['./listar-municipio.component.css']
})
export class ListarMunicipioComponent implements OnInit {

  municipios: Municipio[];
  municipiosFiltrados: Municipio[];
  municipiosPaginados: Municipio[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private municipioService: MunicipioService) {
  }

  ngOnInit(): void {
    this.municipioService.peticionListar().subscribe(data => {
      this.municipios = (data as Municipio[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  adicionarMunicipio(): void {
    this.municipioService.adicionarMunicipio();
  }

  mostrarMunicipio(municipio: Municipio): void {
    this.municipioService.mostrarMunicipio(municipio);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.municipiosPaginados = this.municipiosFiltrados.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.municipiosFiltrados = this.municipios.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.municipiosFiltrados = this.municipios;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
