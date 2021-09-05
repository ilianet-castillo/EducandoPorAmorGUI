import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MilitanciaService} from '../militancia.service';

@Component({
  selector: 'app-editar-militancia',
  templateUrl: './editar-militancia.component.html',
  styleUrls: ['./editar-militancia.component.css']
})
export class EditarMilitanciaComponent implements OnInit {

  editForm: FormGroup;

  constructor(private militanciaService: MilitanciaService) {
  }

  ngOnInit(): void {
    this.editForm = this.militanciaService.getForm();
    this.militanciaService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.militanciaService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.militanciaService.mostrarMilitancia(this.editForm.value);
  }

}
