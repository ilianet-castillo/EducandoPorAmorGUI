import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GrupoDocente} from '../../modelo/grupodocente.model';
import {Asignatura} from '../../modelo/asignatura.model';
import {GrupoClaseService} from '../grupo-clase.service';

@Component({
  selector: 'app-adicionar-grupoclase',
  templateUrl: './adicionar-grupo-clase.component.html',
  styleUrls: ['./adicionar-grupo-clase.component.css']
})
export class AdicionarGrupoClaseComponent implements OnInit {

  addForm: FormGroup;
  grupoDocentes: GrupoDocente[];
  asignaturas: Asignatura[];

  constructor(private grupoClaseService: GrupoClaseService) {
    this.grupoClaseService.obtenerAsignaturas().subscribe(data => {
      this.asignaturas = (data as Asignatura[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.grupoClaseService.obtenerGruposDocente().subscribe(data => {
      this.grupoDocentes = (data as GrupoDocente[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.addForm = this.grupoClaseService.getForm();
  }

  onSubmit() {
    this.grupoClaseService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.grupoClaseService.listarGruposClase();
  }

}
