import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Rol} from '../../modelo/rol.model';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../../modelo/usuario.model';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  editForm: FormGroup;
  roles: Rol[];
  hide = true;

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.obtenerRoles().subscribe(data => {
      this.roles = (data as Rol[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  ngOnInit(): void {
    this.editForm = this.usuarioService.getForm();
    this.usuarioService.peticionObtener().subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.usuarioService.peticionActualizar(this.editForm);
  }

  cancelar(): void {
    this.usuarioService.mostrarUsuario(this.editForm.value);
  }

  esRolSeleccionado(rol: Rol): boolean {
    return (this.editForm.value as Usuario).rol.id === rol.id;
  }

}
