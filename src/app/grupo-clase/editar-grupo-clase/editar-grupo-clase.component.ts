import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GrupoDocente} from '../../modelo/grupodocente.model';
import {Asignatura} from '../../modelo/asignatura.model';
import {GrupoClase} from '../../modelo/grupoclase.model';
import {GrupoClaseService} from '../grupo-clase.service';

@Component({
  selector: 'app-editar-grupoclase',
  templateUrl: './editar-grupo-clase.component.html',
  styleUrls: ['./editar-grupo-clase.component.css']
})
export class EditarGrupoClaseComponent implements OnInit {

  editForm: FormGroup;
  grupoDocentes: GrupoDocente[];
  asignaturas: Asignatura[];

  constructor(private grupoClaseService: GrupoClaseService) {
    this.grupoClaseService.obtenerAsignaturas().subscribe(data => {
      this.asignaturas = (data as Asignatura[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.grupoClaseService.obtenerGruposDocente().subscribe(data => {
      this.grupoDocentes = (data as GrupoDocente[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.editForm = this.grupoClaseService.getForm();
    this.grupoClaseService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.grupoClaseService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.grupoClaseService.mostrarGrupoClase(this.editForm.value);
  }

  esAsignaturaSeleccionado(asignatura: Asignatura): boolean {
    return (this.editForm.value as GrupoClase).asignatura.id === asignatura.id;
  }

  esGrupoDocenteSeleccionado(grupoDocente: GrupoDocente): boolean {
    return (this.editForm.value as GrupoClase).grupoDocente.id === grupoDocente.id;
  }

}
