import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {Rol} from '../modelo/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url = 'rol/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required]
    });
  }

  listarRoles(): void {
    this.router.navigate(['listar-rol']);
  }

  adicionarRol(): void {
    this.router.navigate(['adicionar-rol']);
  }

  editarRol(rol: Rol): void {
    window.localStorage.removeItem('rolId');
    window.localStorage.setItem('rolId', rol.id.toString());
    this.router.navigate(['editar-rol']);
  }

  mostrarRol(rol: Rol): void {
    window.localStorage.removeItem('rolId');
    window.localStorage.setItem('rolId', rol.id.toString());
    this.router.navigate(['mostrar-rol']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const rolId = window.localStorage.getItem('rolId');
    if (!rolId) {
      alert('Acción inválida.');
      this.listarRoles();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +rolId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el rol?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Rol ' + (data as Rol).nombre + ' adicionado satisfactoriamente.');
          this.listarRoles();
        },
        error => {
          alert(error);
        });
    }
  }

  peticionActualizar(editForm: FormGroup): void {
    if (editForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar el rol?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Rol ' + (data as Rol).nombre + ' actualizado satisfactoriamente.');
          // TODO mostrarRol
          this.listarRoles();
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(rol: Rol): void {
    if (confirm('¿Desea eliminar el rol ' + rol.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.url, rol.id).subscribe(data => {
        alert('Rol ' + (data as Rol).nombre + ' eliminado satisfactoriamente.');
        this.listarRoles();
      });
    }
  }

}
