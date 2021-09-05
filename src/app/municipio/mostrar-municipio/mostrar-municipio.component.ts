import {Component, OnInit} from '@angular/core';
import {Municipio} from '../../modelo/municipio.model';
import {MunicipioService} from '../municipio.service';

@Component({
  selector: 'app-mostrar-municipio',
  templateUrl: './mostrar-municipio.component.html',
  styleUrls: ['./mostrar-municipio.component.css']
})
export class MostrarMunicipioComponent implements OnInit {

  municipio: Municipio;

  constructor(private municipioService: MunicipioService) {
  }

  ngOnInit(): void {
    this.municipioService.peticionObtener().subscribe(data => {
      this.municipio = data as Municipio;
    });
  }

  cancelar(): void {
    this.municipioService.listarMunicipios();
  }

  eliminarMunicipio(): void {
    this.municipioService.peticionEliminar(this.municipio);
  }

  editarMunicipio(): void {
    this.municipioService.editarMunicipio(this.municipio);
  }

}
