import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ProvinciaService} from '../provincia.service';

@Component({
  selector: 'app-editar-provincia',
  templateUrl: './editar-provincia.component.html',
  styleUrls: ['./editar-provincia.component.css']
})
export class EditarProvinciaComponent implements OnInit {

  editForm: FormGroup;

  constructor(private provinciaService: ProvinciaService) {
  }

  ngOnInit(): void {
    this.editForm = this.provinciaService.getForm();
    this.provinciaService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.provinciaService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.provinciaService.listarProvincias();
  }

}
