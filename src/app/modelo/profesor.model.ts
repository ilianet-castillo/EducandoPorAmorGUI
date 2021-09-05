import {Facultad} from './facultad.model';

export class Profesor {

  id: number;
  nombre: string;
  apellidos: string;
  categoriaCientifica: string;
  telefono: string;
  sexo: string;
  correoElectronico: string;
  habilitado: boolean;
  facultad: Facultad;

}
