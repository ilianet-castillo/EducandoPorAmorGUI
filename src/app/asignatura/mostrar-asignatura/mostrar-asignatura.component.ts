import {Component, OnInit} from '@angular/core';
import {Asignatura} from '../../modelo/asignatura.model';
import {AsignaturaService} from '../asignatura.service';

@Component({
  selector: 'app-mostrar-asignatura',
  templateUrl: './mostrar-asignatura.component.html',
  styleUrls: ['./mostrar-asignatura.component.css']
})
export class MostrarAsignaturaComponent implements OnInit {

  asignatura: Asignatura;

  constructor(private asignaturaService: AsignaturaService) {
  }

  ngOnInit(): void {
    this.asignaturaService.peticionObtener().subscribe(data => {
      this.asignatura = data as Asignatura;
    });
  }

  cancelar(): void {
    this.asignaturaService.listarAsignaturas();
  }

  eliminarAsignatura(): void {
    this.asignaturaService.peticionEliminar(this.asignatura);
  }

  editarAsignatura(): void {
    this.asignaturaService.editarAsignatura(this.asignatura);
  }

}
