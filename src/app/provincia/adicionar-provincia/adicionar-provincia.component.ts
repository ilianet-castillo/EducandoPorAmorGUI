import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ProvinciaService} from '../provincia.service';

@Component({
  selector: 'app-adicionar-provincia',
  templateUrl: './adicionar-provincia.component.html',
  styleUrls: ['./adicionar-provincia.component.css']
})
export class AdicionarProvinciaComponent implements OnInit {

  addForm: FormGroup;

  constructor(private provinciaService: ProvinciaService) {
  }

  ngOnInit(): void {
    this.addForm = this.provinciaService.getForm();
  }

  onSubmit() {
    this.provinciaService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.provinciaService.listarProvincias();
  }

}
