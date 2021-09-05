import {Component, OnInit} from '@angular/core';
import {ReunionOrdinaria} from '../../modelo/reunionordinaria.model';
import {ReunionOrdinariaService} from '../reunion-ordinaria.service';

@Component({
  selector: 'app-mostrar-reunion-ordinaria',
  templateUrl: './mostrar-reunion-ordinaria.component.html',
  styleUrls: ['./mostrar-reunion-ordinaria.component.css']
})
export class MostrarReunionOrdinariaComponent implements OnInit {

  reunionOrdinaria: ReunionOrdinaria;

  constructor(private reunionOrdinariaService: ReunionOrdinariaService) {
  }

  ngOnInit(): void {
    this.reunionOrdinariaService.peticionObtener().subscribe(data => {
      this.reunionOrdinaria = data as ReunionOrdinaria;
    });
  }

  cancelar(): void {
    this.reunionOrdinariaService.listarReunionOrdinaria();
  }

  eliminarReunionOrdinaria(): void {
    this.reunionOrdinariaService.peticionEliminar(this.reunionOrdinaria);
  }

  editarReunionOrdinaria(): void {
    this.reunionOrdinariaService.editarReunionOrdinaria(this.reunionOrdinaria);
  }

  formatoFecha(fecha: Date): string {
    return this.reunionOrdinariaService.formatoFecha(fecha);
  }

}
