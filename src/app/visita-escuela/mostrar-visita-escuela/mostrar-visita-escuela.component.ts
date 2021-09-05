import {Component, OnInit} from '@angular/core';
import {VisitaEscuela} from '../../modelo/visitaescuela.model';
import {VisitaEscuelaService} from '../visita-escuela.service';

@Component({
  selector: 'app-mostrar-visita-escuela',
  templateUrl: './mostrar-visita-escuela.component.html',
  styleUrls: ['./mostrar-visita-escuela.component.css']
})
export class MostrarVisitaEscuelaComponent implements OnInit {

  visitaEscuela: VisitaEscuela;

  constructor(private visitaEscuelaService: VisitaEscuelaService) {
  }

  ngOnInit(): void {
    this.visitaEscuelaService.peticionObtener().subscribe(data => {
      this.visitaEscuela = data as VisitaEscuela;
    });
  }

  cancelar(): void {
    this.visitaEscuelaService.listarVisitaEscuela();
  }

  eliminarVisitaEscuela(): void {
    this.visitaEscuelaService.peticionEliminar(this.visitaEscuela);
  }

  editarVisitaEscuela(): void {
    this.visitaEscuelaService.editarVisitaEscuela(this.visitaEscuela);
  }

  formatoFecha(fecha: Date): string {
    return this.visitaEscuelaService.formatoFecha(fecha);
  }

}
