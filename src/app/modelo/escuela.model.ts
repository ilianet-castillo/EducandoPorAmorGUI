import {GradoEscolar} from './gradoescolar.model';
import {Asignatura} from './asignatura.model';
import {Municipio} from './municipio.model';
import {NivelEnsennanza} from './nivelensennanza.model';

export class Escuela {

  id: number;
  nombre: string;
  habilitado: boolean;
  municipio: Municipio;
  nivelEnsennanza: NivelEnsennanza;
  gradosEscolares: GradoEscolar[];
  asignaturas: Asignatura[];

}
