import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FacultadService} from '../facultad.service';

@Component({
  selector: 'app-editar-facultad',
  templateUrl: './editar-facultad.component.html',
  styleUrls: ['./editar-facultad.component.css']
})
export class EditarFacultadComponent implements OnInit {

  editForm: FormGroup;

  constructor(private facultadService: FacultadService) {
  }

  ngOnInit(): void {
    this.editForm = this.facultadService.getForm();
    this.facultadService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.facultadService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.facultadService.mostrarFacultad(this.editForm.value);
  }

}
