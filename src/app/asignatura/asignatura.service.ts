import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {Asignatura} from '../modelo/asignatura.model';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  url = 'asignatura/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      habilitado: ['']
    });
  }

  listarAsignaturas(): void {
    this.router.navigate(['listar-asignatura']);
  }

  adicionarAsignatura(): void {
    this.router.navigate(['adicionar-asignatura']);
  }

  editarAsignatura(asignatura: Asignatura): void {
    window.localStorage.removeItem('asignaturaId');
    window.localStorage.setItem('asignaturaId', asignatura.id.toString());
    this.router.navigate(['editar-asignatura']);
  }

  mostrarAsignatura(asignatura: Asignatura): void {
    window.localStorage.removeItem('asignaturaId');
    window.localStorage.setItem('asignaturaId', asignatura.id.toString());
    this.router.navigate(['mostrar-asignatura']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const asignaturaId = window.localStorage.getItem('asignaturaId');
    if (!asignaturaId) {
      alert('Acción inválida.');
      this.listarAsignaturas();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +asignaturaId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar la asignatura ' + (addForm.value as Asignatura).nombre + '?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Asignatura ' + (data as Asignatura).nombre + ' adicionada satisfactoriamente.');
          this.listarAsignaturas();
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

    if (confirm('¿Desea actualizar la asignatura ' + (editForm.value as Asignatura).nombre + '?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Asignatura ' + (data as Asignatura).nombre + ' actualizada satisfactoriamente.');
          this.mostrarAsignatura(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(asignatura: Asignatura): void {
    if (confirm('¿Desea deshabilitar la asignatura ' + asignatura.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.url, asignatura.id).subscribe(data => {
        alert('Asignatura ' + (data as Asignatura).nombre + ' deshabilitada satisfactoriamente.');
        this.listarAsignaturas();
      });
    }
  }

}
