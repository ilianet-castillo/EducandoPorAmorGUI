import {Component, OnInit} from '@angular/core';
import {NombreAnno} from '../../modelo/nombreanno.model';
import {PageEvent} from '@angular/material/paginator';
import {NombreAnnoService} from '../nombre-anno.service';

@Component({
  selector: 'app-listar-nombreanno',
  templateUrl: './listar-nombre-anno.component.html',
  styleUrls: ['./listar-nombre-anno.component.css']
})
export class ListarNombreAnnoComponent implements OnInit {

  nombresAnno: NombreAnno[];
  nombresAnnoFiltrados: NombreAnno[];
  nombresAnnoPaginados: NombreAnno[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private nombreAnnoService: NombreAnnoService) {
  }

  ngOnInit(): void {
    this.nombreAnnoService.peticionListar().subscribe(data => {
      this.nombresAnno = (data as NombreAnno[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  mostrarNombreAnno(nombreAnno: NombreAnno): void {
    this.nombreAnnoService.mostrarNombreAnno(nombreAnno);
  }

  adicionarNombreAnno(): void {
    this.nombreAnnoService.adicionarNombreAnno();
  }

  subLista(pageIndex: number, pageSize: number) {
    this.nombresAnnoPaginados = this.nombresAnnoFiltrados.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.nombresAnnoFiltrados = this.nombresAnno.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.nombresAnnoFiltrados = this.nombresAnno;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
