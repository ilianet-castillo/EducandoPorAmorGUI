import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ObservacionService} from '../observacion.service';

@Component({
  selector: 'app-adicionar-observacion',
  templateUrl: './adicionar-observacion.component.html',
  styleUrls: ['./adicionar-observacion.component.css']
})
export class AdicionarObservacionComponent implements OnInit {

  addForm: FormGroup;

  constructor(private observacionService: ObservacionService) {
  }

  ngOnInit(): void {
    this.addForm = this.observacionService.getFormObservacion();
  }

  onSubmit() {
    this.observacionService.peticionAdicionarObservacion(this.addForm);
  }

  cancelar(): void {
    this.observacionService.listarObservaciones();
  }

}
