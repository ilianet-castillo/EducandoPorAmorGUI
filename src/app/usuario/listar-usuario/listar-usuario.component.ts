import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../modelo/usuario.model';
import {PageEvent} from '@angular/material/paginator';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: Usuario[];
  usuariosFiltrados: Usuario[];
  usuariosPaginados: Usuario[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuarioService.peticionListar().subscribe(data => {
      this.usuarios = (data as Usuario[]).sort((a, b) => a.usuario > b.usuario ? 1 : -1);
      this.buscar(undefined);
    });
  }

  eliminarUsuario(usuario: Usuario): void {
    this.usuarioService.peticionEliminar(usuario);
  }

  editarUsuario(usuario: Usuario): void {
    this.usuarioService.editarUsuario(usuario);
  }

  adicionarUsuario(): void {
    this.usuarioService.adicionarUsuario();
  }

  mostrarUsuario(usuario: Usuario): void {
    this.usuarioService.mostrarUsuario(usuario);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.usuariosPaginados = this.usuariosFiltrados.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.usuariosFiltrados = this.usuarios.filter(data => {
        return data.usuario.includes(value);
      });
    } else {
      this.usuariosFiltrados = this.usuarios;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
