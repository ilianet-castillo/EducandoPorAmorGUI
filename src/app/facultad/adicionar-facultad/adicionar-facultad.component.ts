import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FacultadService} from '../facultad.service';

@Component({
  selector: 'app-adicionar-facultad',
  templateUrl: './adicionar-facultad.component.html',
  styleUrls: ['./adicionar-facultad.component.css']
})
export class AdicionarFacultadComponent implements OnInit {

  addForm: FormGroup;

  constructor(private facultadService: FacultadService) {
  }

  ngOnInit(): void {
    this.addForm = this.facultadService.getForm();
  }

  onSubmit() {
    this.facultadService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.facultadService.listarFacultades();
  }

}
