import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Rol} from '../../modelo/rol.model';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.component.html',
  styleUrls: ['./adicionar-usuario.component.css']
})
export class AdicionarUsuarioComponent implements OnInit {

  addForm: FormGroup;
  hide = true;
  roles: Rol[];

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.obtenerRoles().subscribe(data => {
      this.roles = (data as Rol[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.addForm = this.usuarioService.getForm();
  }

  onSubmit() {
    this.usuarioService.peticionAdicionar(this.addForm);
  }

  cancelar(): void {
    this.usuarioService.listarUsuarios();
  }

}
