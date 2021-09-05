import {Component, OnInit} from '@angular/core';
import {Facultad} from '../../modelo/facultad.model';
import {FacultadService} from '../facultad.service';

@Component({
  selector: 'app-mostrar-facultad',
  templateUrl: './mostrar-facultad.component.html',
  styleUrls: ['./mostrar-facultad.component.css']
})
export class MostrarFacultadComponent implements OnInit {

  facultad: Facultad;

  constructor(private facultadService: FacultadService) {
  }

  ngOnInit(): void {
    this.facultadService.peticionObtener().subscribe(data => {
      this.facultad = data as Facultad;
    });
  }

  cancelar(): void {
    this.facultadService.listarFacultades();
  }

  eliminarFacultad(): void {
    this.facultadService.peticionEliminar(this.facultad);
  }

  editarFacultad(): void {
    this.facultadService.editarFacultad(this.facultad);
  }

}
