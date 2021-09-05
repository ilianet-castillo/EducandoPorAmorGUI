import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AsignaturaService} from '../asignatura.service';

@Component({
  selector: 'app-editar-asignatura',
  templateUrl: './editar-asignatura.component.html',
  styleUrls: ['./editar-asignatura.component.css']
})
export class EditarAsignaturaComponent implements OnInit {

  editForm: FormGroup;

  constructor(private asignaturaService: AsignaturaService) {
  }

  ngOnInit(): void {
    this.editForm = this.asignaturaService.getForm();
    this.asignaturaService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.asignaturaService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.asignaturaService.mostrarAsignatura(this.editForm.value);
  }

}
