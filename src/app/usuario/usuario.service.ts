import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {Usuario} from '../modelo/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'usuario/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      usuario: ['', Validators.required],
      pass: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  listarUsuarios(): void {
    this.router.navigate(['listar-usuario']);
  }

  adicionarUsuario(): void {
    this.router.navigate(['adicionar-usuario']);
  }

  editarUsuario(usuario: Usuario): void {
    window.localStorage.removeItem('usuarioId');
    window.localStorage.setItem('usuarioId', usuario.id.toString());
    this.router.navigate(['editar-usuario']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const usuarioId = window.localStorage.getItem('usuarioId');
    if (!usuarioId) {
      alert('Acción inválida.');
      this.listarUsuarios();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +usuarioId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el usuario?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Usuario ' + (data as Usuario).usuario + ' adicionado satisfactoriamente.');
          this.listarUsuarios();
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

    if (confirm('¿Desea actualizar el usuario?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Usuario ' + (data as Usuario).usuario + ' actualizado satisfactoriamente.');
          this.mostrarUsuario(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(usuario: Usuario): void {
    if (confirm('¿Desea deshabilitar el usuario ' + usuario.usuario + '?')) {
      this.apiService.enviarPeticionDelete(this.url, usuario.id).subscribe(data => {
        alert('Usuario ' + (data as Usuario).usuario + ' eliminado satisfactoriamente.');
        this.listarUsuarios();
      });
    }
  }

  mostrarUsuario(usuario: Usuario): void {
    window.localStorage.removeItem('usuarioId');
    window.localStorage.setItem('usuarioId', usuario.id.toString());
    this.router.navigate(['mostrar-usuario']);
  }

  // TODO
  obtenerRoles(): Observable<any> {
    return this.apiService.enviarPeticionGet('rol/');
  }

}
