import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GrupoDocenteService} from '../grupo-docente.service';
import {GradoEscolar} from '../../modelo/gradoescolar.model';

@Component({
  selector: 'app-adicionar-grupodocente',
  templateUrl: './adicionar-grupo-docente.component.html',
  styleUrls: ['./adicionar-grupo-docente.component.css']
})
export class AdicionarGrupoDocenteComponent implements OnInit {

  addForm: FormGroup;
  gradosEscolares: GradoEscolar[];

  constructor(private grupoDocenteService: GrupoDocenteService) {
    this.grupoDocenteService.obtenerGradosEscolares().subscribe(data => {
      this.gradosEscolares = (data as GradoEscolar[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.addForm = this.grupoDocenteService.getForm();
  }

  onSubmit() {
    this.grupoDocenteService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.grupoDocenteService.listarGruposDocentes();
  }

}
