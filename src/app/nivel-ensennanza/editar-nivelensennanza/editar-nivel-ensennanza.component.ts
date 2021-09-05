import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NivelEnsennanzaService} from '../nivel-ensennanza.service';

@Component({
  selector: 'app-editar-nivelensennanza',
  templateUrl: './editar-nivel-ensennanza.component.html',
  styleUrls: ['./editar-nivel-ensennanza.component.css']
})
export class EditarNivelEnsennanzaComponent implements OnInit {

  editForm: FormGroup;

  constructor(private nivelEnsennanzaService: NivelEnsennanzaService) {
  }

  ngOnInit(): void {
    this.editForm = this.nivelEnsennanzaService.getForm();
    this.nivelEnsennanzaService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit(): void {
    this.nivelEnsennanzaService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.nivelEnsennanzaService.listarNivelesEnsennanza();
  }

}
