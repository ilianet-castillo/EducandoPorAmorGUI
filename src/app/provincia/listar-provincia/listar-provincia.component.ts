import {Component, OnInit} from '@angular/core';
import {Provincia} from '../../modelo/provincia.model';
import {PageEvent} from '@angular/material/paginator';
import {ProvinciaService} from '../provincia.service';

@Component({
  selector: 'app-listar-provincia',
  templateUrl: './listar-provincia.component.html',
  styleUrls: ['./listar-provincia.component.css']
})
export class ListarProvinciaComponent implements OnInit {

  provincias: Provincia[];
  provinciasFiltradas: Provincia[];
  provinciasPaginadas: Provincia[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private provinciaService: ProvinciaService) {
  }

  ngOnInit(): void {
    this.provinciaService.peticionListar().subscribe(data => {
      this.provincias = (data as Provincia[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  adicionarProvincia(): void {
    this.provinciaService.adicionarProvincia();
  }

  mostrarProvincia(provincia: Provincia): void {
    this.provinciaService.mostrarProvincia(provincia);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.provinciasPaginadas = this.provinciasFiltradas.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.provinciasFiltradas = this.provincias.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.provinciasFiltradas = this.provincias;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
