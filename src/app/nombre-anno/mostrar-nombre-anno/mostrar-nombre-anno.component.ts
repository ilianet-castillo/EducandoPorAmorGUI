import {Component, OnInit} from '@angular/core';
import {NombreAnno} from '../../modelo/nombreanno.model';
import {NombreAnnoService} from '../nombre-anno.service';

@Component({
  selector: 'app-mostrar-nombre-anno',
  templateUrl: './mostrar-nombre-anno.component.html',
  styleUrls: ['./mostrar-nombre-anno.component.css']
})
export class MostrarNombreAnnoComponent implements OnInit {

  nombreAnno: NombreAnno;

  constructor(private nombreAnnoService: NombreAnnoService) {
  }

  ngOnInit(): void {
    this.nombreAnnoService.peticionObtener().subscribe(data => {
      this.nombreAnno = data as NombreAnno;
    });
  }

  cancelar(): void {
    this.nombreAnnoService.listarNombresAnno();
  }

  eliminarNombreAnno(): void {
    this.nombreAnnoService.peticionEliminar(this.nombreAnno);
  }

  editarNombreAnno(): void {
    this.nombreAnnoService.editarNombreAnno(this.nombreAnno);
  }

}
