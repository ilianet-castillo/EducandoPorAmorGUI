import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {Facultad} from '../modelo/facultad.model';
import {Estado} from '../modelo/estado.model';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  url = 'facultad/';

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

  listarFacultades(): void {
    this.router.navigate(['listar-facultad']);
  }

  adicionarFacultad(): void {
    this.router.navigate(['adicionar-facultad']);
  }

  editarFacultad(facultad: Facultad): void {
    window.localStorage.removeItem('facultadId');
    window.localStorage.setItem('facultadId', facultad.id.toString());
    this.router.navigate(['editar-facultad']);
  }

  mostrarFacultad(facultad: Facultad): void {
    window.localStorage.removeItem('facultadId');
    window.localStorage.setItem('facultadId', facultad.id.toString());
    this.router.navigate(['mostrar-facultad']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const facultadId = window.localStorage.getItem('facultadId');
    if (!facultadId) {
      alert('Acción inválida.');
      this.listarFacultades();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +facultadId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar la facultad ' + (addForm.value as Facultad).nombre + '?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Facultad ' + (data as Facultad).nombre + ' adicionada satisfactoriamente.');
          this.listarFacultades();
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

    if (confirm('¿Desea actualizar la facultad ' + (editForm.value as Facultad).nombre + '?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Facultad ' + (data as Facultad).nombre + ' actualizada satisfactoriamente.');
          this.mostrarFacultad(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(facultad: Facultad): void {
    if (confirm('¿Desea deshabilitar la facultad ' + facultad.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.url, facultad.id).subscribe(data => {
        alert('Facultad ' + (data as Facultad).nombre + ' deshabilitada satisfactoriamente.');
        this.listarFacultades();
      });
    }
  }

}
