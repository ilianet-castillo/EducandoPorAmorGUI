import {Component, OnInit} from '@angular/core';
import {GradoEscolar} from '../../modelo/gradoescolar.model';
import {GradoEscolarService} from '../grado-escolar.service';

@Component({
  selector: 'app-mostrar-grado-escolar',
  templateUrl: './mostrar-grado-escolar.component.html',
  styleUrls: ['./mostrar-grado-escolar.component.css']
})
export class MostrarGradoEscolarComponent implements OnInit {

  gradoEscolar: GradoEscolar;

  constructor(private gradoEscolarService: GradoEscolarService) {
  }

  ngOnInit(): void {
    this.gradoEscolarService.peticionObtener().subscribe(data => {
      this.gradoEscolar = data as GradoEscolar;
    });
  }

  cancelar(): void {
    this.gradoEscolarService.listarGradosEscolares();
  }

  eliminarGradoEscolar(): void {
    this.gradoEscolarService.peticionEliminar(this.gradoEscolar);
  }

  editarGradoEscolar(): void {
    this.gradoEscolarService.editarGradoEscolar(this.gradoEscolar);
  }

}
