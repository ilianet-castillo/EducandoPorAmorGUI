import {Escuela} from './escuela.model';
import {Estado} from './estado.model';
import {Facultad} from './facultad.model';
import {Militancia} from './militancia.model';
import {GradoEscolar} from './gradoescolar.model';
import {GrupoClase} from './grupoclase.model';

export class Estudiante {

  id: number;
  nombre: string;
  apellidos: string;
  ci: number;
  solapin: string;
  telefono: string;
  sexo: string;
  direccionParticular: string;
  habilitado: boolean;
  estado: Estado;
  facultad: Facultad;
  militancia: Militancia;
  gradoEscolar: GradoEscolar;
  escuela: Escuela;
  grupoClase: GrupoClase;

}
