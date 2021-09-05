import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ValorEvaluacionService} from '../valor-evaluacion.service';

@Component({
  selector: 'app-editar-valorevaluacion',
  templateUrl: './editar-valor-evaluacion.component.html',
  styleUrls: ['./editar-valor-evaluacion.component.css']
})
export class EditarValorEvaluacionComponent implements OnInit {

  editForm: FormGroup;

  constructor(private valorEvaluacionService: ValorEvaluacionService) {
  }

  ngOnInit(): void {
    this.editForm = this.valorEvaluacionService.getForm();
    this.valorEvaluacionService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.valorEvaluacionService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.valorEvaluacionService.listarValoresEvaluacion();
  }

}
