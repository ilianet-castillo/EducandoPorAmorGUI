import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GradoEscolarService} from '../grado-escolar.service';

@Component({
  selector: 'app-adicionar-gradoescolar',
  templateUrl: './adicionar-grado-escolar.component.html',
  styleUrls: ['./adicionar-grado-escolar.component.css']
})
export class AdicionarGradoEscolarComponent implements OnInit {

  addForm: FormGroup;

  constructor(private gradoEscolarService: GradoEscolarService) {
  }

  ngOnInit(): void {
    this.addForm = this.gradoEscolarService.getForm();
  }

  onSubmit() {
    this.gradoEscolarService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.gradoEscolarService.listarGradosEscolares();
  }

}
