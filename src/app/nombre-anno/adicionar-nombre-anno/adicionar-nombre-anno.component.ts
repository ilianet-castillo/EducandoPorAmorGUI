import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NombreAnnoService} from '../nombre-anno.service';

@Component({
  selector: 'app-adicionar-nombreanno',
  templateUrl: './adicionar-nombre-anno.component.html',
  styleUrls: ['./adicionar-nombre-anno.component.css']
})
export class AdicionarNombreAnnoComponent implements OnInit {

  addForm: FormGroup;

  constructor(private nombreAnnoService: NombreAnnoService) {
  }

  ngOnInit(): void {
    this.addForm = this.nombreAnnoService.getForm();
  }

  onSubmit() {
    this.nombreAnnoService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.nombreAnnoService.listarNombresAnno();
  }

}
