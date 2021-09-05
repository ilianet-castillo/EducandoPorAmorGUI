import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Municipio} from '../../modelo/municipio.model';
import {GradoEscolar} from '../../modelo/gradoescolar.model';
import {Asignatura} from '../../modelo/asignatura.model';
import {NivelEnsennanza} from '../../modelo/nivelensennanza.model';
import {Escuela} from '../../modelo/escuela.model';
import {EscuelaService} from '../escuela.service';

@Component({
  selector: 'app-editar-escuela',
  templateUrl: './editar-escuela.component.html',
  styleUrls: ['./editar-escuela.component.css']
})
export class EditarEscuelaComponent implements OnInit {

  editForm: FormGroup;
  municipios: Municipio[];
  gradosEscolares: GradoEscolar[];
  asignaturas: Asignatura[];
  nivelesEnsennanzas: NivelEnsennanza[];

  constructor(private escuelaService: EscuelaService) {
    this.escuelaService.obtenerMunicipios().subscribe(data => {
      this.municipios = (data as Municipio[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.escuelaService.obtenerGradosEscolares().subscribe(data => {
      this.gradosEscolares = (data as GradoEscolar[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.escuelaService.obtenerAsignaturas().subscribe(data => {
      this.asignaturas = (data as Asignatura[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.escuelaService.obtenerNivelesEnsennanzas().subscribe(data => {
      this.nivelesEnsennanzas = (data as NivelEnsennanza[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.editForm = this.escuelaService.getForm();
    this.escuelaService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.escuelaService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.escuelaService.mostrarEscuela(this.editForm.value);
  }

  esMunicipioSeleccionado(municipio: Municipio): boolean {
    return (this.editForm.value as Escuela).municipio.id === municipio.id;
  }

  esGradoEscolarSeleccionado(gradoEscolar: GradoEscolar): boolean {
    for (const gradoEscolarObject of (this.editForm.value as Escuela).gradosEscolares) {
      if (gradoEscolarObject.id === gradoEscolar.id) {
        return true;
      }
    }

    return false;
  }

  esAsignaturaSeleccionada(asignatura: Asignatura): boolean {
    for (const asignaturaObject of (this.editForm.value as Escuela).asignaturas) {
      if (asignaturaObject.id === asignatura.id) {
        return true;
      }
    }

    return false;
  }

  esNivelEnsennanzaSeleccionado(nivelEnsennanza: NivelEnsennanza): boolean {
    return (this.editForm.value as Escuela).nivelEnsennanza.id === nivelEnsennanza.id;
  }

}
