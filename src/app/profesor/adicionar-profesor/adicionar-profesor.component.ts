import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Facultad} from '../../modelo/facultad.model';
import {ProfesorService} from '../profesor.service';

@Component({
  selector: 'app-adicionar-profesor',
  templateUrl: './adicionar-profesor.component.html',
  styleUrls: ['./adicionar-profesor.component.css']
})
export class AdicionarProfesorComponent implements OnInit {

  addForm: FormGroup;
  facultades: Facultad[];

  constructor(private profesorService: ProfesorService) {
    this.profesorService.obtenerFacultades().subscribe(data => {
      this.facultades = data as Facultad[];
    });
  }

  ngOnInit(): void {
    this.addForm = this.profesorService.getForm();
  }

  onSubmit() {
    this.profesorService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.profesorService.listarProfesores();
  }

}
