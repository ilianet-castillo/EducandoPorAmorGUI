import {Estudiante} from './estudiante.model';
import {Provincia} from './provincia.model';
import {Escuela} from './escuela.model';
import {Observacion} from './observacion.model';
import {NombreAnno} from './nombreanno.model';
import {Profesor} from './profesor.model';

export class VisitaEscuela {

  id: number;
  provincia: Provincia;
  fecha: Date;
  nombreAnno: NombreAnno;
  escuela: Escuela;
  estudiantes: Estudiante[];
  cuerpo: string;
  observacion: Observacion;
  nombreDirectivo: string;
  cargo: string;
  profesor: Profesor;

}
