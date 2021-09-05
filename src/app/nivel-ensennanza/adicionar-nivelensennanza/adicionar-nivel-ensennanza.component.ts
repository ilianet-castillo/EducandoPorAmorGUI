import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NivelEnsennanzaService} from '../nivel-ensennanza.service';

@Component({
  selector: 'app-adicionar-nivelensennanza',
  templateUrl: './adicionar-nivel-ensennanza.component.html',
  styleUrls: ['./adicionar-nivel-ensennanza.component.css']
})
export class AdicionarNivelEnsennanzaComponent implements OnInit {

  addForm: FormGroup;

  constructor(private nivelEnsennanzaService: NivelEnsennanzaService) {
  }

  ngOnInit(): void {
    this.addForm = this.nivelEnsennanzaService.getForm();
  }

  onSubmit(): void {
    this.nivelEnsennanzaService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.nivelEnsennanzaService.listarNivelesEnsennanza();
  }

}
