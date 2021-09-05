import {Component, OnInit} from '@angular/core';
import {Observacion} from '../../modelo/observacion.model';
import {ObservacionService} from '../observacion.service';
import {RespuestaObservacion} from '../../modelo/respuestaobservacion.model';

@Component({
  selector: 'app-mostrar-observacion',
  templateUrl: './mostrar-observacion.component.html',
  styleUrls: ['./mostrar-observacion.component.css']
})
export class MostrarObservacionComponent implements OnInit {

  observacion: Observacion;
  respuestasObservacion: RespuestaObservacion[];

  constructor(private observacionService: ObservacionService) {
    this.observacionService.obtenerRespuestasObservacion().subscribe(data => {
      this.respuestasObservacion = data as RespuestaObservacion[];
    });
  }

  ngOnInit(): void {
    this.observacionService.peticionObtenerObservacion().subscribe(data => {
      this.observacion = data as Observacion;
    });
  }

  cancelar(): void {
    this.observacionService.listarObservaciones();
  }

  eliminarObservacion(): void {
    this.observacionService.peticionEliminarObservacion(this.observacion);
  }

  editarObservacion(): void {
    this.observacionService.editarObservacion(this.observacion);
  }

}
