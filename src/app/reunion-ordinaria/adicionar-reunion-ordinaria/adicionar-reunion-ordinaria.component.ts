import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Provincia} from '../../modelo/provincia.model';
import {Profesor} from '../../modelo/profesor.model';
import {ReunionOrdinariaService} from '../reunion-ordinaria.service';

@Component({
  selector: 'app-adicionar-reunionordinaria',
  templateUrl: './adicionar-reunion-ordinaria.component.html',
  styleUrls: ['./adicionar-reunion-ordinaria.component.css']
})
export class AdicionarReunionOrdinariaComponent implements OnInit {

  addForm: FormGroup;
  profesores: Profesor[];
  provincias: Provincia[];

  constructor(private reunionOrdinariaService: ReunionOrdinariaService) {
    this.reunionOrdinariaService.obtenerProfesores().subscribe(data => {
      this.profesores = (data as Profesor[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });

    this.reunionOrdinariaService.obtenerProvincias().subscribe(data => {
      this.provincias = (data as Provincia[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.addForm = this.reunionOrdinariaService.getForm();
  }

  onSubmit() {
    this.reunionOrdinariaService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.reunionOrdinariaService.listarReunionOrdinaria();
  }
}
