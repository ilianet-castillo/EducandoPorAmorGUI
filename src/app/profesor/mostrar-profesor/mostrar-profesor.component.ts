import {Component, OnInit} from '@angular/core';
import {Profesor} from '../../modelo/profesor.model';
import {ProfesorService} from '../profesor.service';

@Component({
  selector: 'app-mostrar-profesor',
  templateUrl: './mostrar-profesor.component.html',
  styleUrls: ['./mostrar-profesor.component.css']
})
export class MostrarProfesorComponent implements OnInit {

  profesor: Profesor;

  constructor(private profesorService: ProfesorService) {
  }

  ngOnInit(): void {
    this.profesorService.peticionObtener().subscribe(data => {
      this.profesor = data as Profesor;
    });
  }

  cancelar(): void {
    this.profesorService.listarProfesores();
  }

  eliminarProfesor(): void {
    this.profesorService.peticionEliminar(this.profesor);
  }

  editarProfesor(): void {
    this.profesorService.editarProfesor(this.profesor);
  }

}
