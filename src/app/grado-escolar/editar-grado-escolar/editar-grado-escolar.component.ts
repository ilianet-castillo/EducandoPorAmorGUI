import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GradoEscolarService} from '../grado-escolar.service';

@Component({
  selector: 'app-editar-gradoescolar',
  templateUrl: './editar-grado-escolar.component.html',
  styleUrls: ['./editar-grado-escolar.component.css']
})
export class EditarGradoEscolarComponent implements OnInit {

  editForm: FormGroup;

  constructor(private gradoEscolarService: GradoEscolarService) {
  }

  ngOnInit(): void {
    this.editForm = this.gradoEscolarService.getForm();
    this.gradoEscolarService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.gradoEscolarService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.gradoEscolarService.listarGradosEscolares();
  }

}
