import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Facultad} from '../../modelo/facultad.model';
import {Profesor} from '../../modelo/profesor.model';
import {ProfesorService} from '../profesor.service';

@Component({
  selector: 'app-editar-profesor',
  templateUrl: './editar-profesor.component.html',
  styleUrls: ['./editar-profesor.component.css']
})
export class EditarProfesorComponent implements OnInit {

  editForm: FormGroup;
  facultades: Facultad[];

  constructor(private profesorService: ProfesorService) {
    this.profesorService.obtenerFacultades().subscribe(data => {
      this.facultades = data as Facultad[];
    });
  }

  ngOnInit(): void {
    this.editForm = this.profesorService.getForm();
    this.profesorService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.profesorService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.profesorService.mostrarProfesor(this.editForm.value);
  }

  esFacultadeSeleccionada(facultad: Facultad): boolean {
    return (this.editForm.value as Profesor).facultad.id === facultad.id;
  }

}
