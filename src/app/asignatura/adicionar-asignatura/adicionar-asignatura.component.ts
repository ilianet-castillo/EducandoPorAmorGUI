import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AsignaturaService} from '../asignatura.service';

@Component({
  selector: 'app-adicionar-asignatura',
  templateUrl: './adicionar-asignatura.component.html',
  styleUrls: ['./adicionar-asignatura.component.css']
})
export class AdicionarAsignaturaComponent implements OnInit {

  addForm: FormGroup;

  constructor(private asignaturaService: AsignaturaService) {
  }

  ngOnInit(): void {
    this.addForm = this.asignaturaService.getForm();
  }

  onSubmit() {
    this.asignaturaService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.asignaturaService.listarAsignaturas();
  }

}
