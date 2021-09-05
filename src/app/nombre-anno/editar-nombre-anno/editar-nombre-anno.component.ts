import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NombreAnnoService} from '../nombre-anno.service';

@Component({
  selector: 'app-editar-nombreanno',
  templateUrl: './editar-nombre-anno.component.html',
  styleUrls: ['./editar-nombre-anno.component.css']
})
export class EditarNombreAnnoComponent implements OnInit {

  editForm: FormGroup;

  constructor(private nombreAnnoService: NombreAnnoService) {
  }

  ngOnInit(): void {
    this.editForm = this.nombreAnnoService.getForm();
    this.nombreAnnoService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.nombreAnnoService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.nombreAnnoService.listarNombresAnno();
  }

}
