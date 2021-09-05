import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Municipio} from '../../modelo/municipio.model';
import {GradoEscolar} from '../../modelo/gradoescolar.model';
import {Asignatura} from '../../modelo/asignatura.model';
import {NivelEnsennanza} from '../../modelo/nivelensennanza.model';
import {EscuelaService} from '../escuela.service';

@Component({
  selector: 'app-adicionar-escuela',
  templateUrl: './adicionar-escuela.component.html',
  styleUrls: ['./adicionar-escuela.component.css']
})
export class AdicionarEscuelaComponent implements OnInit {

  addForm: FormGroup;
  municipios: Municipio[];
  gradosEscolares: GradoEscolar[];
  asignaturas: Asignatura[];
  nivelesEnsennanzas: NivelEnsennanza[];

  constructor(private escuelaService: EscuelaService) {
    this.escuelaService.obtenerMunicipios().subscribe(data => {
      this.municipios = (data as Municipio[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.escuelaService.obtenerGradosEscolares().subscribe(data => {
      this.gradosEscolares = (data as GradoEscolar[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.escuelaService.obtenerAsignaturas().subscribe(data => {
      this.asignaturas = (data as Asignatura[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.escuelaService.obtenerNivelesEnsennanzas().subscribe(data => {
      this.nivelesEnsennanzas = (data as NivelEnsennanza[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.addForm = this.escuelaService.getForm();
  }

  onSubmit() {
    this.escuelaService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.escuelaService.listarEscuelas();
  }

}
