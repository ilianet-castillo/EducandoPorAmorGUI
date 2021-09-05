import {Component, OnInit} from '@angular/core';
import {VisitaEscuela} from '../../modelo/visitaescuela.model';
import {PageEvent} from '@angular/material/paginator';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {VisitaEscuelaService} from '../visita-escuela.service';

@Component({
  selector: 'app-listar-visitaescuela',
  templateUrl: './listar-visita-escuela.component.html',
  styleUrls: ['./listar-visita-escuela.component.css']
})
export class ListarVisitaEscuelaComponent implements OnInit {

  visitaEscuelas: VisitaEscuela[];
  visitaEscuelasFiltradas: VisitaEscuela[];
  visitaEscuelasPaginadas: VisitaEscuela[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private visitaEscuelaService: VisitaEscuelaService) {
  }

  ngOnInit(): void {
    this.visitaEscuelaService.peticionListar().subscribe(data => {
      this.visitaEscuelas = (data as VisitaEscuela[]).sort((a, b) => a.fecha > b.fecha ? 1 : -1);
      this.buscar(undefined);
    });
  }

  eliminarVisitaEscuela(visitaEscuela: VisitaEscuela): void {
    this.visitaEscuelaService.peticionEliminar(visitaEscuela);
  }

  modificarVisitaEscuela(visitaEscuela: VisitaEscuela): void {
    this.visitaEscuelaService.editarVisitaEscuela(visitaEscuela);
  }

  adicionarVisitaEscuela(): void {
    this.visitaEscuelaService.adicionarVisitaEscuela();
  }

  mostrarVisitaEscuela(visitaEscuela: VisitaEscuela): void {
    this.visitaEscuelaService.mostrarVisitaEscuela(visitaEscuela);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.visitaEscuelasPaginadas = this.visitaEscuelasFiltradas.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(event: MatDatepickerInputEvent<Date>) {
    let date;
    if (event) {
      date = this.visitaEscuelaService.formatoFecha(event.value);
    }

    if (date) {
      this.visitaEscuelasFiltradas = this.visitaEscuelas.filter(s => {
        return this.visitaEscuelaService.formatoFecha(s.fecha) === date;
      });
    } else {
      this.visitaEscuelasFiltradas = this.visitaEscuelas;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

  formatoFecha(fecha: Date): string {
    return this.visitaEscuelaService.formatoFecha(fecha);
  }

}
