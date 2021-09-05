import {ValorEvaluacion} from './valorevaluacion.model';
import {Estudiante} from './estudiante.model';

export class Evaluacion {

  id: number;
  estudiante: Estudiante;
  valorEvaluacion: ValorEvaluacion;
  fecha: Date;

}
