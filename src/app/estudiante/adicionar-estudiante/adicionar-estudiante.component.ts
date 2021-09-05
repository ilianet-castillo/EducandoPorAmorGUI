import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GradoEscolar} from '../../modelo/gradoescolar.model';
import {EstudianteService} from '../estudiante.service';
import {Estado} from '../../modelo/estado.model';
import {Facultad} from '../../modelo/facultad.model';
import {Militancia} from '../../modelo/militancia.model';
import {Escuela} from '../../modelo/escuela.model';
import {GrupoClase} from '../../modelo/grupoclase.model';

@Component({
  selector: 'app-adicionar-estudiante',
  templateUrl: './adicionar-estudiante.component.html',
  styleUrls: ['./adicionar-estudiante.component.css']
})
export class AdicionarEstudianteComponent implements OnInit {

  addForm: FormGroup;
  estados: Estado[];
  facultades: Facultad[];
  gradosEscolar: GradoEscolar[];
  militancias: Militancia[];
  escuelas: Escuela[];
  gruposClase: GrupoClase[];

  constructor(private estudianteService: EstudianteService) {
    this.estudianteService.obtenerEstados().subscribe(data => {
      this.estados = (data as Estado[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.estudianteService.obtenerFacultades().subscribe(data => {
      this.facultades = (data as Facultad[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.estudianteService.obtenerGradosEscolar().subscribe(data => {
      this.gradosEscolar = (data as GradoEscolar[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.estudianteService.obtenerMilitancias().subscribe(data => {
      this.militancias = (data as Militancia[]).sort((a, b) => a.tipo > b.tipo ? 1 : -1);
    });

    this.estudianteService.obtenerEscuelas().subscribe(data => {
      this.escuelas = (data as Escuela[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.estudianteService.obtenerGruposClase().subscribe(data => {
      this.gruposClase = (data as GrupoClase[]).sort((a, b) => a.grupoDocente > b.grupoDocente ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.addForm = this.estudianteService.getFormEstudiante();
  }

  onSubmit() {
    this.estudianteService.peticionAdicionarEstudiante(this.addForm);
  }

  cancelar(): void {
    this.estudianteService.listarEstudiantes();
  }

}
