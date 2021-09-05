import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RolService} from '../rol.service';

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.css']
})
export class EditarRolComponent implements OnInit {

  editForm: FormGroup;

  constructor(private rolService: RolService) {
  }

  ngOnInit(): void {
    this.editForm = this.rolService.getForm();
    this.rolService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.rolService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.rolService.mostrarRol(this.editForm.value);
  }

}
