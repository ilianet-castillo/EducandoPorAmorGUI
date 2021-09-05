import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {ActivoAlumno} from '../modelo/activo-alumno.model';
import {ProfesorService} from '../profesor/profesor.service';
import {EstudianteService} from '../estudiante/estudiante.service';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ActivoAlumnoService {

  url = 'activoalumno/';

  constructor(private apiService: ApiService,
              private datePipe: DatePipe,
              private estudianteService: EstudianteService,
              private formBuilder: FormBuilder,
              private profesorService: ProfesorService,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      titulo: ['', Validators.required],
      fecha: new FormControl(new Date()),
      lugar: ['', Validators.required],
      hora: ['', Validators.required],
      cuerpo: ['', Validators.required],
      estudiantesPresentes: ['', Validators.required],
      estudiantesAusentes: ['', Validators.required],
      profesores: ['', Validators.required]
    });
  }

  listarActivosAlumno(): void {
    this.router.navigate(['listar-activoalumno']);
  }

  adicionarActivoAlumno(): void {
    this.router.navigate(['adicionar-activoalumno']);
  }

  editarActivoAlumno(activoAlumno: ActivoAlumno): void {
    window.localStorage.removeItem('activoalumnoId');
    window.localStorage.setItem('activoalumnoId', activoAlumno.id.toString());
    this.router.navigate(['editar-activoalumno']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const activoAlumnoId = window.localStorage.getItem('activoalumnoId');
    if (!activoAlumnoId) {
      alert('Acción inválida.');
      this.listarActivosAlumno();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +activoAlumnoId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el activo de alumnos ' + (addForm.value as ActivoAlumno).titulo + '?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Activo de alumnos ' + (data as ActivoAlumno).titulo + ' adicionado satisfactoriamente.');
          this.listarActivosAlumno();
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

    if (confirm('¿Desea actualizar el activo de alumnos ' + (editForm.value as ActivoAlumno).titulo + '?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Activo de alumnos ' + (data as ActivoAlumno).titulo + ' actualizado satisfactoriamente.');
          this.mostrarActivoAlumno(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(activoAlumno: ActivoAlumno): void {
    if (confirm('¿Desea eliminar el activo de alumnos?')) {
      this.apiService.enviarPeticionDelete(this.url, activoAlumno.id).subscribe(data => {
        alert('Activo de alumnos ' + (data as ActivoAlumno).titulo + ' eliminado satisfactoriamente.');
        this.listarActivosAlumno();
      });
    }
  }

  mostrarActivoAlumno(activoAlumno: ActivoAlumno): void {
    window.localStorage.removeItem('activoalumnoId');
    window.localStorage.setItem('activoalumnoId', activoAlumno.id.toString());
    this.router.navigate(['mostrar-activoalumno']);
  }

  formatoFecha(fecha: Date): string {
    return this.datePipe.transform(fecha, 'dd/MM/yyyy');
  }

  obtenerEstudiantes(): Observable<any> {
    return this.estudianteService.peticionListar();
  }

  obtenerProfesores(): Observable<any> {
    return this.profesorService.peticionListar();
  }

}
