import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observacion} from '../../modelo/observacion.model';
import {ObservacionService} from '../observacion.service';

@Component({
  selector: 'app-editar-respuestaobservacion',
  templateUrl: './editar-respuestaobservacion.component.html',
  styleUrls: ['./editar-respuestaobservacion.component.css']
})
export class EditarRespuestaobservacionComponent implements OnInit {

  editForm: FormGroup;
  observacion: Observacion;

  constructor(private observacionService: ObservacionService) {
    this.observacionService.peticionObtenerObservacion().subscribe(data => {
      this.observacion = (data as Observacion);
    });
  }

  ngOnInit(): void {
    this.editForm = this.observacionService.getFormRespuestaObservacion();
    this.observacionService.peticionObtenerRespuestaObservacion().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.observacionService.peticionActualizarRespuestaObservacion(this.editForm);
  }

  cancelar(): void {
    this.observacionService.mostrarObservacion(this.observacion);
  }

}
