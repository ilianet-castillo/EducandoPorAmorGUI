import {Component, OnInit} from '@angular/core';
import {MilitanciaService} from '../militancia.service';
import {Militancia} from '../../modelo/militancia.model';

@Component({
  selector: 'app-mostrar-militancia',
  templateUrl: './mostrar-militancia.component.html',
  styleUrls: ['./mostrar-militancia.component.css']
})
export class MostrarMilitanciaComponent implements OnInit {

  militancia: Militancia;

  constructor(private militanciaService: MilitanciaService) {
  }

  ngOnInit(): void {
    this.militanciaService.peticionObtener().subscribe(data => {
      this.militancia = data as Militancia;
    });
  }

  cancelar(): void {
    this.militanciaService.listarMilitancias();
  }

  eliminarMilitancia(): void {
    this.militanciaService.peticionEliminar(this.militancia);
  }

  editarMilitancia(): void {
    this.militanciaService.editarMilitancia(this.militancia);
  }

}
