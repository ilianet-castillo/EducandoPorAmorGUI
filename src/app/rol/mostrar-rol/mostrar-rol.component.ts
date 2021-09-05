import {Component, OnInit} from '@angular/core';
import {Rol} from '../../modelo/rol.model';
import {RolService} from '../rol.service';

@Component({
  selector: 'app-mostrar-rol',
  templateUrl: './mostrar-rol.component.html',
  styleUrls: ['./mostrar-rol.component.css']
})
export class MostrarRolComponent implements OnInit {

  rol: Rol;

  constructor(private rolService: RolService) {
  }

  ngOnInit(): void {
    this.rolService.peticionObtener().subscribe(data => {
      this.rol = data as Rol;
    });
  }

  cancelar(): void {
    this.rolService.listarRoles();
  }

  eliminarRol(): void {
    this.rolService.peticionEliminar(this.rol);
  }

  editarRol(): void {
    this.rolService.editarRol(this.rol);
  }

}
