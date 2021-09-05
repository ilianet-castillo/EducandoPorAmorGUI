import {GrupoDocente} from './grupodocente.model';
import {Asignatura} from './asignatura.model';

export class GrupoClase {

  id: number;
  grupoDocente: GrupoDocente;
  asignatura: Asignatura;
  habilitado: boolean;

}


