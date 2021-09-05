import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ValorEvaluacionService} from '../valor-evaluacion.service';

@Component({
  selector: 'app-adicionar-valorevaluacion',
  templateUrl: './adicionar-valor-evaluacion.component.html',
  styleUrls: ['./adicionar-valor-evaluacion.component.css']
})
export class AdicionarValorEvaluacionComponent implements OnInit {

  addForm: FormGroup;

  constructor(private valorEvaluacionService: ValorEvaluacionService) {
  }

  ngOnInit(): void {
    this.addForm = this.valorEvaluacionService.getForm();
  }

  onSubmit() {
    this.valorEvaluacionService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.valorEvaluacionService.listarValoresEvaluacion();
  }

}
