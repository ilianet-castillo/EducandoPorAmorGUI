import { Component, OnInit } from '@angular/core';
import {GradoEscolar} from '../../modelo/gradoescolar.model';
import {GradoEscolarService} from '../../grado-escolar/grado-escolar.service';
import {GrupoClase} from '../../modelo/grupoclase.model';
import {GrupoClaseService} from '../grupo-clase.service';

@Component({
  selector: 'app-mostrar-grupo-clase',
  templateUrl: './mostrar-grupo-clase.component.html',
  styleUrls: ['./mostrar-grupo-clase.component.css']
})
export class MostrarGrupoClaseComponent implements OnInit {

  grupoClase: GrupoClase;

  constructor(private grupoClaseService: GrupoClaseService) {
  }

  ngOnInit(): void {
    this.grupoClaseService.peticionObtener().subscribe(data => {
      this.grupoClase = data as GrupoClase;
    });
  }

  cancelar(): void {
    this.grupoClaseService.listarGruposClase();
  }

  eliminarGrupoClase(): void {
    this.grupoClaseService.peticionEliminar(this.grupoClase);
  }

  editarGrupoClase(): void {
    this.grupoClaseService.editarGrupoClase(this.grupoClase);
  }

}
