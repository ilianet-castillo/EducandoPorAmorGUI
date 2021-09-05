import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {EstadoService} from '../estado.service';

@Component({
  selector: 'app-adicionar-estado',
  templateUrl: './adicionar-estado.component.html',
  styleUrls: ['./adicionar-estado.component.css']
})
export class AdicionarEstadoComponent implements OnInit {

  addForm: FormGroup;

  constructor(private estadoService: EstadoService) {
  }

  ngOnInit(): void {
    this.addForm = this.estadoService.getForm();
  }

  onSubmit() {
    this.estadoService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.estadoService.listarEstados();
  }

}
