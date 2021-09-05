import {Component, OnInit} from '@angular/core';
import {Facultad} from '../../modelo/facultad.model';
import {FacultadService} from '../facultad.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-listar-facultad',
  templateUrl: './listar-facultad.component.html',
  styleUrls: ['./listar-facultad.component.css']
})
export class ListarFacultadComponent implements OnInit {

  facultades: Facultad[];
  facultadesFiltradas: Facultad[];
  facultadesPaginadas: Facultad[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private facultadService: FacultadService) {
  }

  ngOnInit(): void {
    this.facultadService.peticionListar().subscribe(data => {
      this.facultades = (data as Facultad[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  adicionarFacultad(): void {
    this.facultadService.adicionarFacultad();
  }

  mostrarFacultad(facultad: Facultad): void {
    this.facultadService.mostrarFacultad(facultad);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.facultadesPaginadas = this.facultadesFiltradas.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.facultadesFiltradas = this.facultades.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.facultadesFiltradas = this.facultades;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
