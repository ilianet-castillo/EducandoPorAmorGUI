import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RolService} from '../rol.service';

@Component({
  selector: 'app-adicionar-rol',
  templateUrl: './adicionar-rol.component.html',
  styleUrls: ['./adicionar-rol.component.css']
})
export class AdicionarRolComponent implements OnInit {

  addForm: FormGroup;

  constructor(private rolService: RolService) {
  }

  ngOnInit(): void {
    this.addForm = this.rolService.getForm();
  }

  onSubmit() {
    this.rolService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.rolService.listarRoles();
  }

}
