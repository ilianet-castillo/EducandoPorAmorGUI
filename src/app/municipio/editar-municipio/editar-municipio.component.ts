import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MunicipioService} from '../municipio.service';
import {Provincia} from '../../modelo/provincia.model';
import {Municipio} from '../../modelo/municipio.model';

@Component({
  selector: 'app-editar-municipio',
  templateUrl: './editar-municipio.component.html',
  styleUrls: ['./editar-municipio.component.css']
})
export class EditarMunicipioComponent implements OnInit {

  editForm: FormGroup;
  provincias: Provincia[];

  constructor(private municipioService: MunicipioService) {
    this.municipioService.obtenerProvincias().subscribe(data => {
      this.provincias = (data as Provincia[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.editForm = this.municipioService.getForm();
    this.municipioService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.municipioService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.municipioService.listarMunicipios();
  }

  esProvinciaSeleccionada(provincia: Provincia): boolean {
    return (this.editForm.value as Municipio).provincia.id === provincia.id;
  }

}
