import {Component, OnInit} from '@angular/core';
import {GradoEscolar} from '../../modelo/gradoescolar.model';
import {GradoEscolarService} from '../grado-escolar.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-listar-gradoescolar',
  templateUrl: './listar-grado-escolar.component.html',
  styleUrls: ['./listar-grado-escolar.component.css']
})
export class ListarGradoEscolarComponent implements OnInit {

  gradosEscolares: GradoEscolar[];
  gradosEscolaresFiltrados: GradoEscolar[];
  gradosEscolaresPaginados: GradoEscolar[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private gradoEscolarService: GradoEscolarService) {
  }

  ngOnInit(): void {
    this.gradoEscolarService.peticionListar().subscribe(data => {
      this.gradosEscolares = (data as GradoEscolar[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  adicionarGradoEscolar(): void {
    this.gradoEscolarService.adicionarGradoEscolar();
  }

  mostrarGradoEscolar(gradoEscolar: GradoEscolar): void {
    this.gradoEscolarService.mostrarGradoEscolar(gradoEscolar);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.gradosEscolaresPaginados = this.gradosEscolaresFiltrados.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.gradosEscolaresFiltrados = this.gradosEscolares.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.gradosEscolaresFiltrados = this.gradosEscolares;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
