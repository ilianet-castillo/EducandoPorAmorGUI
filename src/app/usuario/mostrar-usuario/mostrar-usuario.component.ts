import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../../modelo/usuario.model';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
})
export class MostrarUsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuarioService.peticionObtener().subscribe(data => {
      this.usuario = data as Usuario;
    });
  }

  cancelar(): void {
    this.usuarioService.listarUsuarios();
  }

  eliminarUsuario(): void {
    this.usuarioService.peticionEliminar(this.usuario);
  }

  editarUsuario(): void {
    this.usuarioService.editarUsuario(this.usuario);
  }

}
