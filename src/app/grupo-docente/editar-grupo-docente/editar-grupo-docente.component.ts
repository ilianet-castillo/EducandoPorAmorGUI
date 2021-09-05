import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GrupoDocenteService} from '../grupo-docente.service';
import {GradoEscolar} from '../../modelo/gradoescolar.model';
import {GrupoDocente} from '../../modelo/grupodocente.model';

@Component({
  selector: 'app-editar-grupodocente',
  templateUrl: './editar-grupo-docente.component.html',
  styleUrls: ['./editar-grupo-docente.component.css']
})
export class EditarGrupoDocenteComponent implements OnInit {

  editForm: FormGroup;
  gradosEscolares: GradoEscolar[];

  constructor(private grupoDocenteService: GrupoDocenteService) {
    this.grupoDocenteService.obtenerGradosEscolares().subscribe(data => {
      this.gradosEscolares = (data as GradoEscolar[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.editForm = this.grupoDocenteService.getForm();
    this.grupoDocenteService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.grupoDocenteService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.grupoDocenteService.listarGruposDocentes();
  }

  esGradoEscolarSeleccionado(gradoEscolar: GradoEscolar): boolean {
    return (this.editForm.value as GrupoDocente).gradoEscolar.id === gradoEscolar.id;
  }

}
