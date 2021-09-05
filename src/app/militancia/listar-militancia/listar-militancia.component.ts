import {Component, OnInit} from '@angular/core';
import {Militancia} from '../../modelo/militancia.model';
import {PageEvent} from '@angular/material/paginator';
import {MilitanciaService} from '../militancia.service';

@Component({
  selector: 'app-listar-militancia',
  templateUrl: './listar-militancia.component.html',
  styleUrls: ['./listar-militancia.component.css']
})
export class ListarMilitanciaComponent implements OnInit {

  militancias: Militancia[];
  militanciasFiltradas: Militancia[];
  militanciasPaginadas: Militancia[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private militanciaService: MilitanciaService) {
  }

  ngOnInit(): void {
    this.militanciaService.peticionListar().subscribe(data => {
      this.militancias = (data as Militancia[]).sort((a, b) => a.tipo > b.tipo ? 1 : -1);
      this.buscar(undefined);
    });
  }

  adicionarMilitancia(): void {
    this.militanciaService.adicionarMilitancia();
  }

  mostrarMilitancia(militancia: Militancia): void {
    this.militanciaService.mostrarMilitancia(militancia);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.militanciasPaginadas = this.militanciasFiltradas.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.militanciasFiltradas = this.militancias.filter(s => {
        return s.tipo.includes(value);
      });
    } else {
      this.militanciasFiltradas = this.militancias;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
