import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MilitanciaService} from '../militancia.service';

@Component({
  selector: 'app-adicionar-militancia',
  templateUrl: './adicionar-militancia.component.html',
  styleUrls: ['./adicionar-militancia.component.css']
})
export class AdicionarMilitanciaComponent implements OnInit {

  addForm: FormGroup;

  constructor(private militanciaService: MilitanciaService) {
  }

  ngOnInit(): void {
    this.addForm = this.militanciaService.getForm();
  }

  onSubmit() {
    this.militanciaService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.militanciaService.listarMilitancias();
  }

}
