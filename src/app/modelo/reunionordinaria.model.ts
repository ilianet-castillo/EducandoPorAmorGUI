import {Profesor} from './profesor.model';
import {Provincia} from './provincia.model';
import {Time} from '@angular/common';

export class ReunionOrdinaria {

  id: number;
  titulo: string;
  provincia: Provincia;
  fecha: Date;
  lugar: string;
  hora: Time;
  asistenciaEstudiantes: number;
  profesores: Profesor[];
  ordenDelDia: string;
  cuerpo: string;
  acuerdos: string;
  finalizacion: string;

}
