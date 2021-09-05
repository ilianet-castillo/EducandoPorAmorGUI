import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {DatePipe} from '@angular/common';
import {EstudianteService} from '../estudiante/estudiante.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {VisitaEscuela} from '../modelo/visitaescuela.model';
import {ProvinciaService} from '../provincia/provincia.service';
import {NombreAnnoService} from '../nombre-anno/nombre-anno.service';
import {EscuelaService} from '../escuela/escuela.service';
import {ObservacionService} from '../observacion/observacion.service';
import {ProfesorService} from '../profesor/profesor.service';

@Injectable({
  providedIn: 'root'
})
export class VisitaEscuelaService {

  url = 'visitaescuela/';

  constructor(private apiService: ApiService,
              private datePipe: DatePipe,
              private escuelaService: EscuelaService,
              private estudianteService: EstudianteService,
              private formBuilder: FormBuilder,
              private nombreAnnoService: NombreAnnoService,
              private observacionService: ObservacionService,
              private provinciaService: ProvinciaService,
              private profesorService: ProfesorService,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      provincia: ['', Validators.required],
      fecha: ['', Validators.required],
      nombreAnno: ['', Validators.required],
      escuela: ['', Validators.required],
      estudiantes: ['', Validators.required],
      cuerpo: ['', Validators.required],
      observacion: ['', Validators.required],
      nombreDirectivo: ['', Validators.required],
      cargo: ['', Validators.required],
      profesor: ['', Validators.required]
    });
  }

  listarVisitaEscuela(): void {
    this.router.navigate(['listar-visitaescuela']);
  }

  adicionarVisitaEscuela(): void {
    this.router.navigate(['adicionar-visitaescuela']);
  }

  editarVisitaEscuela(visitaEscuela: VisitaEscuela): void {
    window.localStorage.removeItem('visitaescuelaId');
    window.localStorage.setItem('visitaescuelaId', visitaEscuela.id.toString());
    this.router.navigate(['editar-visitaescuela']);
  }

  mostrarVisitaEscuela(visitaEscuela: VisitaEscuela): void {
    window.localStorage.removeItem('visitaescuelaId');
    window.localStorage.setItem('visitaescuelaId', visitaEscuela.id.toString());
    this.router.navigate(['mostrar-visitaescuela']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const visitaEscuelaId = window.localStorage.getItem('visitaescuelaId');
    if (!visitaEscuelaId) {
      alert('Acción inválida.');
      this.listarVisitaEscuela();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +visitaEscuelaId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el activo de alumnos?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Activo de alumnos adicionado satisfactoriamente.');
          this.listarVisitaEscuela();
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

    if (confirm('¿Desea actualizar el activo de alumnos?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Activo de alumnos actualizado satisfactoriamente.');
          this.mostrarVisitaEscuela(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(visitaEscuela: VisitaEscuela): void {
    if (confirm('¿Desea eliminar el activo de alumnos?')) {
      this.apiService.enviarPeticionDelete(this.url, visitaEscuela.id).subscribe(data => {
        alert('Activo de alumnos eliminado satisfactoriamente.');
        this.listarVisitaEscuela();
      });
    }
  }

  formatoFecha(fecha: Date): string {
    return this.datePipe.transform(fecha, 'dd/MM/yyyy');
  }

  obtenerProvincias(): Observable<any> {
    return this.provinciaService.peticionListar();
  }

  obtenerNombresAnno(): Observable<any> {
    return this.nombreAnnoService.peticionListar();
  }

  obtenerEscuelas(): Observable<any> {
    return this.escuelaService.peticionListar();
  }

  obtenerEstudiantes(): Observable<any> {
    return this.estudianteService.peticionListar();
  }

  obtenerObservaciones(): Observable<any> {
    return this.observacionService.peticionListar();
  }

  obtenerProfesores(): Observable<any> {
    return this.profesorService.peticionListar();
  }

}
