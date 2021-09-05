import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {EstadoService} from '../estado.service';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent implements OnInit {

  editForm: FormGroup;

  constructor(private estadoService: EstadoService) {
  }

  ngOnInit(): void {
    this.editForm = this.estadoService.getForm();
    this.estadoService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.estadoService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.estadoService.mostrarEstado(this.editForm.value);
  }

}
