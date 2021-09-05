import {Estudiante} from './estudiante.model';
import {Time} from '@angular/common';
import {Profesor} from './profesor.model';

export class ActivoAlumno {

  id: number;
  titulo: string;
  fecha: Date;
  lugar: string;
  hora: Time;
  estudiantesAusentes: Estudiante[];
  estudiantesPresentes: Estudiante[];
  profesores: Profesor[];
  cuerpo: string;

}
