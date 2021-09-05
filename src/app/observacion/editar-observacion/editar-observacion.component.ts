import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ObservacionService} from '../observacion.service';
import {RespuestaObservacion} from '../../modelo/respuestaobservacion.model';

@Component({
  selector: 'app-editar-observacion',
  templateUrl: './editar-observacion.component.html',
  styleUrls: ['./editar-observacion.component.css']
})
export class EditarObservacionComponent implements OnInit {

  editForm: FormGroup;
  respuestasObservacion: RespuestaObservacion[];

  constructor(private observacionService: ObservacionService) {
    this.observacionService.obtenerRespuestasObservacion().subscribe(data => {
      this.respuestasObservacion = data as RespuestaObservacion[];
    });
  }

  ngOnInit(): void {
    this.editForm = this.observacionService.getFormObservacion();
    this.observacionService.peticionObtenerObservacion().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.observacionService.peticionActualizarObservacion(this.editForm);
  }

  cancelar(): void {
    this.observacionService.mostrarObservacion(this.editForm.value);
  }

  adicionarRespuestaObervacion(): void {
    this.observacionService.adicionarRespuestaObservacion();
  }

  peticionEliminarRespuestaObservacion(respuestaObservacion: RespuestaObservacion): void {
    this.observacionService.peticionEliminarRespuestaObservacion(respuestaObservacion);
  }

  editarRespuestaObservacion(respuestaObservacion: RespuestaObservacion): void {
    this.observacionService.editarRespuestaObservacion(respuestaObservacion);
  }

}
