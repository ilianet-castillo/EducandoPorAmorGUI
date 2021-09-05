import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Provincia} from '../../modelo/provincia.model';
import {MunicipioService} from '../municipio.service';

@Component({
  selector: 'app-adicionar-municipio',
  templateUrl: './adicionar-municipio.component.html',
  styleUrls: ['./adicionar-municipio.component.css']
})
export class AdicionarMunicipioComponent implements OnInit {

  addForm: FormGroup;
  provincias: Provincia[];

  constructor(private municipioService: MunicipioService) {
    this.municipioService.obtenerProvincias().subscribe(data => {
      this.provincias = (data as Provincia[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.addForm = this.municipioService.getForm();
  }

  onSubmit() {
    this.municipioService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.municipioService.listarMunicipios();
  }

}
