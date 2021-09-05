import { Component, OnInit } from '@angular/core';
import {Asignatura} from '../../modelo/asignatura.model';
import {AsignaturaService} from '../../asignatura/asignatura.service';
import {Estado} from '../../modelo/estado.model';
import {EstadoService} from '../estado.service';

@Component({
  selector: 'app-mostrar-estado',
  templateUrl: './mostrar-estado.component.html',
  styleUrls: ['./mostrar-estado.component.css']
})
export class MostrarEstadoComponent implements OnInit {

  estado: Estado;

  constructor(private estadoService: EstadoService) {
  }

  ngOnInit(): void {
    this.estadoService.peticionObtener().subscribe(data => {
      this.estado = data as Estado;
    });
  }

  cancelar(): void {
    this.estadoService.listarEstados();
  }

  eliminarEstado(): void {
    this.estadoService.peticionEliminar(this.estado);
  }

  editarEstado(): void {
    this.estadoService.editarEstado(this.estado);
  }

}
