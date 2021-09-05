import {Component, OnInit} from '@angular/core';
import {Provincia} from '../../modelo/provincia.model';
import {ProvinciaService} from '../provincia.service';

@Component({
  selector: 'app-mostrar-provincia',
  templateUrl: './mostrar-provincia.component.html',
  styleUrls: ['./mostrar-provincia.component.css']
})
export class MostrarProvinciaComponent implements OnInit {

  provincia: Provincia;

  constructor(private provinciaService: ProvinciaService) {
  }

  ngOnInit(): void {
    this.provinciaService.peticionObtener().subscribe(data => {
      this.provincia = data as Provincia;
    });
  }

  cancelar(): void {
    this.provinciaService.listarProvincias();
  }

  eliminarProvincia(): void {
    this.provinciaService.peticionEliminar(this.provincia);
  }

  editarProvincia(): void {
    this.provinciaService.editarProvincia(this.provincia);
  }

}
