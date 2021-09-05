import {Component, OnInit} from '@angular/core';
import {Escuela} from '../../modelo/escuela.model';
import {EscuelaService} from '../escuela.service';

@Component({
  selector: 'app-mostrar-escuela',
  templateUrl: './mostrar-escuela.component.html',
  styleUrls: ['./mostrar-escuela.component.css']
})
export class MostrarEscuelaComponent implements OnInit {

  escuela: Escuela;

  constructor(private escuelaService: EscuelaService) {
  }

  ngOnInit(): void {
    this.escuelaService.peticionObtener().subscribe(data => {
      this.escuela = data as Escuela;
      this.escuela.asignaturas.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.escuela.gradosEscolares.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  cancelar(): void {
    this.escuelaService.listarEscuelas();
  }

  eliminarEscuela(): void {
    this.escuelaService.peticionEliminar(this.escuela);
  }

  editarEscuela(): void {
    this.escuelaService.editarEscuela(this.escuela);
  }

}
