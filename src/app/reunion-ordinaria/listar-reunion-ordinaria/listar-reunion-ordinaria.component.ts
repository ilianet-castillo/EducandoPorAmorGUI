import {Component, OnInit} from '@angular/core';
import {ReunionOrdinaria} from '../../modelo/reunionordinaria.model';
import {PageEvent} from '@angular/material/paginator';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {ReunionOrdinariaService} from '../reunion-ordinaria.service';

@Component({
  selector: 'app-listar-reunionordinaria',
  templateUrl: './listar-reunion-ordinaria.component.html',
  styleUrls: ['./listar-reunion-ordinaria.component.css']
})
export class ListarReunionOrdinariaComponent implements OnInit {

  reunionOrdinarias: ReunionOrdinaria[];
  reunionOrdinariasFiltradas: ReunionOrdinaria[];
  reunionOrdinariasPaginadas: ReunionOrdinaria[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private reunionOrdinariaService: ReunionOrdinariaService) {
  }

  ngOnInit(): void {
    this.reunionOrdinariaService.peticionListar().subscribe(data => {
      this.reunionOrdinarias = (data as ReunionOrdinaria[]).sort((a, b) => a.fecha > b.fecha ? 1 : -1);
      this.buscar(undefined);
    });
  }

  eliminarReunionOrdinaria(reunionOrdinaria: ReunionOrdinaria): void {
    this.reunionOrdinariaService.peticionEliminar(reunionOrdinaria);
  }

  modificarReunionOrdinaria(reunionOrdinaria: ReunionOrdinaria): void {
    this.reunionOrdinariaService.editarReunionOrdinaria(reunionOrdinaria);
  }

  adicionarReunionOrdinaria(): void {
    this.reunionOrdinariaService.adicionarReunionOrdinaria();
  }

  mostrarReunionOrdinaria(reunionOrdinaria: ReunionOrdinaria): void {
    this.reunionOrdinariaService.mostrarReunionOrdinaria(reunionOrdinaria);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.reunionOrdinariasPaginadas = this.reunionOrdinariasFiltradas.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(event: MatDatepickerInputEvent<Date>) {
    let date;
    if (event) {
      date = this.reunionOrdinariaService.formatoFecha(event.value);
    }

    if (date) {
      this.reunionOrdinariasFiltradas = this.reunionOrdinarias.filter(s => {
        return this.reunionOrdinariaService.formatoFecha(s.fecha) === date;
      });
    } else {
      this.reunionOrdinariasFiltradas = this.reunionOrdinarias;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

  formatoFecha(fecha: Date): string {
    return this.reunionOrdinariaService.formatoFecha(fecha);
  }

}
