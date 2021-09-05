import {Component, OnInit} from '@angular/core';
import {GrupoDocente} from '../../modelo/grupodocente.model';
import {GrupoDocenteService} from '../grupo-docente.service';

@Component({
  selector: 'app-mostrar-grupo-docente',
  templateUrl: './mostrar-grupo-docente.component.html',
  styleUrls: ['./mostrar-grupo-docente.component.css']
})
export class MostrarGrupoDocenteComponent implements OnInit {

  grupoDocente: GrupoDocente;

  constructor(private grupoDocenteService: GrupoDocenteService) {
  }

  ngOnInit(): void {
    this.grupoDocenteService.peticionObtener().subscribe(data => {
      this.grupoDocente = data as GrupoDocente;
    });
  }

  cancelar(): void {
    this.grupoDocenteService.listarGruposDocentes();
  }

  eliminarGrupoDocente(): void {
    this.grupoDocenteService.peticionEliminar(this.grupoDocente);
  }

  editarGrupoDocente(): void {
    this.grupoDocenteService.editarGrupoDocente(this.grupoDocente);
  }

}
