import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Provincia} from '../../modelo/provincia.model';
import {ReunionOrdinaria} from '../../modelo/reunionordinaria.model';
import {Profesor} from '../../modelo/profesor.model';
import {ActivoAlumno} from '../../modelo/activo-alumno.model';
import {ReunionOrdinariaService} from '../reunion-ordinaria.service';

@Component({
  selector: 'app-editar-reunionordinaria',
  templateUrl: './editar-reunion-ordinaria.component.html',
  styleUrls: ['./editar-reunion-ordinaria.component.css']
})
export class EditarReunionOrdinariaComponent implements OnInit {

  editForm: FormGroup;
  profesores: Profesor[];
  provincias: Provincia[];

  constructor(private reunionOrdinariaService: ReunionOrdinariaService) {
    this.reunionOrdinariaService.obtenerProfesores().subscribe(data => {
      this.profesores = (data as Profesor[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.reunionOrdinariaService.obtenerProvincias().subscribe(data => {
      this.provincias = (data as Provincia[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.editForm = this.reunionOrdinariaService.getForm();
    this.reunionOrdinariaService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
      this.editForm.setControl('fecha', new FormControl(new Date((data as ReunionOrdinaria).fecha.toString())));
    });
  }

  onSubmit() {
    this.reunionOrdinariaService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.reunionOrdinariaService.mostrarReunionOrdinaria(this.editForm.value);
  }

  esProfesorSeleccionado(profesor: Profesor): boolean {
    for (const profesorObject of (this.editForm.value as ActivoAlumno).profesores) {
      if (profesorObject.id === profesor.id) {
        return true;
      }
    }

    return false;
  }

  esProvinciaSeleccionado(provincia: Provincia): boolean {
    return (this.editForm.value as ReunionOrdinaria).provincia.id === provincia.id;
  }

}
