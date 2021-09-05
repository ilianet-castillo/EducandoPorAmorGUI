import {Component, OnInit} from '@angular/core';
import {Rol} from '../../modelo/rol.model';
import {RolService} from '../rol.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.css']
})
export class ListarRolComponent implements OnInit {

  roles: Rol[];
  rolesFiltrados: Rol[];
  rolesPaginados: Rol[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private rolService: RolService) {
  }

  ngOnInit(): void {
    this.rolService.peticionListar().subscribe(data => {
      this.roles = (data as Rol[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  adicionarRol(): void {
    this.rolService.adicionarRol();
  }

  mostrarRol(rol: Rol): void {
    this.rolService.mostrarRol(rol);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.rolesPaginados = this.rolesFiltrados.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.rolesFiltrados = this.roles.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.rolesFiltrados = this.roles;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
