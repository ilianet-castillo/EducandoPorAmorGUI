import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {GrupoDocente} from '../modelo/grupodocente.model';
import {Escuela} from '../modelo/escuela.model';

@Injectable({
  providedIn: 'root'
})
export class GrupoDocenteService {

  url = 'grupodocente/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      habilitado: [''],
      gradoEscolar: ['', Validators.required]
    });
  }

  listarGruposDocentes(): void {
    this.router.navigate(['listar-grupo-docente']);
  }

  adicionarGrupoDocente(): void {
    this.router.navigate(['adicionar-grupo-docente']);
  }

  editarGrupoDocente(grupoDocente: GrupoDocente): void {
    window.localStorage.removeItem('grupoDocenteId');
    window.localStorage.setItem('grupoDocenteId', grupoDocente.id.toString());
    this.router.navigate(['editar-grupo-docente']);
  }

  mostrarGrupoDocente(grupoDocente: GrupoDocente): void {
    window.localStorage.removeItem('grupoDocenteId');
    window.localStorage.setItem('grupoDocenteId', grupoDocente.id.toString());
    this.router.navigate(['mostrar-grupo-docente']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const grupoDocenteId = window.localStorage.getItem('grupoDocenteId');
    if (!grupoDocenteId) {
      alert('Acción inválida.');
      this.listarGruposDocentes();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +grupoDocenteId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el grupo docente?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Grupo docente ' + (data as GrupoDocente).nombre + ' adicionado satisfactoriamente.');
          this.listarGruposDocentes();
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

    if (confirm('¿Desea actualizar el grupo docente?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Grupo docente ' + (data as GrupoDocente).nombre + ' actualizado satisfactoriamente.');
          this.mostrarGrupoDocente(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(grupoDocente: GrupoDocente): void {
    if (confirm('¿Desea deshabilitar el grupo docente ' + grupoDocente.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.url, grupoDocente.id).subscribe(data => {
        alert('Grupo docente ' + (data as GrupoDocente).nombre + ' deshabilitado satisfactoriamente.');
        this.listarGruposDocentes();
      });
    }
  }

  // TODO add gradoescolar control
  obtenerGradosEscolares(): Observable<any> {
    return this.apiService.enviarPeticionGet('gradoescolar/');
  }

}
