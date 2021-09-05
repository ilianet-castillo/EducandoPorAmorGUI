import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FacultadService} from '../facultad/facultad.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {Profesor} from '../modelo/profesor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  url = 'profesor/';

  constructor(private apiService: ApiService,
              private facultadService: FacultadService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      categoriaCientifica: [''],
      telefono: [''],
      sexo: ['', Validators.required],
      correoElectronico: [''],
      habilitado: [''],
      facultad: ['', Validators.required]
    });
  }

  listarProfesores(): void {
    this.router.navigate(['listar-profesor']);
  }

  adicionarProfesor(): void {
    this.router.navigate(['adicionar-profesor']);
  }

  editarProfesor(profesor: Profesor): void {
    window.localStorage.removeItem('profesorId');
    window.localStorage.setItem('profesorId', profesor.id.toString());
    this.router.navigate(['editar-profesor']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const profesorId = window.localStorage.getItem('profesorId');
    if (!profesorId) {
      alert('Acción inválida.');
      this.listarProfesores();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +profesorId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el profesor?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Profesor ' + (data as Profesor).nombre + ' adicionado satisfactoriamente.');
          this.listarProfesores();
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

    if (confirm('¿Desea actualizar el profesor?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Profesor ' + (data as Profesor).nombre + ' actualizado satisfactoriamente.');
          this.mostrarProfesor(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(profesor: Profesor): void {
    if (confirm('¿Desea deshabilitar el profesor ' + profesor.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.url, profesor.id).subscribe(data => {
        alert('Profesor ' + (data as Profesor).nombre + ' deshabilitado satisfactoriamente.');
        this.listarProfesores();
      });
    }
  }

  mostrarProfesor(profesor: Profesor): void {
    window.localStorage.removeItem('profesorId');
    window.localStorage.setItem('profesorId', profesor.id.toString());
    this.router.navigate(['mostrar-profesor']);
  }

  obtenerFacultades(): Observable<any> {
    return this.facultadService.peticionListar();
  }

}
