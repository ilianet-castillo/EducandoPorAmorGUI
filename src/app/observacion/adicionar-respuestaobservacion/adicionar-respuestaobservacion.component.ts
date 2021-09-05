import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observacion} from '../../modelo/observacion.model';
import {ObservacionService} from '../observacion.service';
import {RespuestaObservacion} from '../../modelo/respuestaobservacion.model';

@Component({
  selector: 'app-adicionar-respuestaobservacion',
  templateUrl: './adicionar-respuestaobservacion.component.html',
  styleUrls: ['./adicionar-respuestaobservacion.component.css']
})
export class AdicionarRespuestaobservacionComponent implements OnInit {

  addForm: FormGroup;
  observacion: Observacion;

  constructor(private observacionService: ObservacionService) {
    this.observacionService.peticionObtenerObservacion().subscribe(data => {
      this.observacion = (data as Observacion);
    });
  }

  ngOnInit(): void {
    this.addForm = this.observacionService.getFormRespuestaObservacion();
  }

  onSubmit() {
    (this.addForm.value as RespuestaObservacion).observacion = this.observacion;
    this.observacionService.peticionAdicionarRespuestaObservacion(this.addForm);
  }

  cancelar(): void {
    this.observacionService.editarObservacion(this.observacion);
  }

}
