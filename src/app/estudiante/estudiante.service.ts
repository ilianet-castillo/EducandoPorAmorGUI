import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {Estudiante} from '../modelo/estudiante.model';
import {EstadoService} from '../estado/estado.service';
import {FacultadService} from '../facultad/facultad.service';
import {GradoEscolarService} from '../grado-escolar/grado-escolar.service';
import {EscuelaService} from '../escuela/escuela.service';
import {Evaluacion} from '../modelo/evaluacion.model';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  urlEstudiante = 'estudiante/';
  urlEvaluacion = 'evaluacion/';

  constructor(private apiService: ApiService,
              private datePipe: DatePipe,
              private escuelaService: EscuelaService,
              private estadoService: EstadoService,
              private facultadService: FacultadService,
              private formBuilder: FormBuilder,
              private gradoEscolarService: GradoEscolarService,
              private router: Router) {
  }

  getFormEstudiante(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      ci: ['', Validators.required],
      solapin: ['', Validators.required],
      telefono: ['', Validators.required],
      sexo: ['', Validators.required],
      direccionParticular: ['', Validators.required],
      habilitado: [''],
      estado: ['', Validators.required],
      facultad: ['', Validators.required],
      gradoEscolar: ['', Validators.required],
      militancia: ['', Validators.required],
      escuela: [''],
      grupoClase: ['']
    });
  }

  getFormEvaluacion(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      fecha: new FormControl(new Date()),
      estudiante: [''],
      valorEvaluacion: ['', Validators.required]
    });
  }

  listarEstudiantes(): void {
    this.router.navigate(['listar-estudiante']);
  }

  adicionarEstudiante(): void {
    this.router.navigate(['adicionar-estudiante']);
  }

  adicionarEvaluacion(): void {
    const estudianteId = window.localStorage.getItem('estudianteId');
    if (!estudianteId) {
      alert('Acción inválida.');
      this.listarEstudiantes();
      return;
    }

    this.router.navigate(['adicionar-evaluacion']);
  }

  editarEstudiante(estudiante: Estudiante): void {
    window.localStorage.removeItem('estudianteId');
    window.localStorage.setItem('estudianteId', estudiante.id.toString());
    this.router.navigate(['editar-estudiante']);
  }

  editarEvaluacion(evaluacion: Evaluacion): void {
    window.localStorage.removeItem('evaluacionId');
    window.localStorage.setItem('evaluacionId', evaluacion.id.toString());
    this.router.navigate(['editar-evaluacion']);
  }

  mostrarEstudiante(estudiante: Estudiante): void {
    window.localStorage.removeItem('estudianteId');
    window.localStorage.setItem('estudianteId', estudiante.id.toString());
    this.router.navigate(['mostrar-estudiante']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.urlEstudiante);
  }

  peticionObtenerEstudiante(): Observable<any> {
    const estudianteId = window.localStorage.getItem('estudianteId');
    if (!estudianteId) {
      alert('Acción inválida.');
      this.listarEstudiantes();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.urlEstudiante, +estudianteId);
  }

  peticionObtenerEvaluacion(): Observable<any> {
    const evaluacionId = window.localStorage.getItem('evaluacionId');
    if (!evaluacionId) {
      alert('Acción inválida.');
      this.listarEstudiantes();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.urlEvaluacion, +evaluacionId);
  }

  peticionAdicionarEstudiante(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el estudiante ' + (addForm.value as Estudiante).nombre + '?')) {
      if (!(addForm.value as Estudiante).escuela) {
        (addForm.value as Estudiante).escuela = null;
      }

      if (!(addForm.value as Estudiante).grupoClase) {
        (addForm.value as Estudiante).grupoClase = null;
      }

      this.apiService.enviarPeticionPost(this.urlEstudiante, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Estudiante ' + (data as Estudiante).nombre + ' adicionado satisfactoriamente.');
          this.mostrarEstudiante(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionAdicionarEvaluacion(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar la evaluación al estudiante ' + (addForm.value as Evaluacion).estudiante.nombre + '?')) {
      this.apiService.enviarPeticionPost(this.urlEvaluacion, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Evaluación a ' + (data as Evaluacion).estudiante.nombre + ' adicionada satisfactoriamente.');
          this.editarEstudiante(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionActualizarEstudiante(editForm: FormGroup): void {
    if (editForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar el estudiante ' + (editForm.value as Estudiante).nombre + '?')) {
      if (!(editForm.value as Estudiante).escuela) {
        (editForm.value as Estudiante).escuela = null;
      }

      if (!(editForm.value as Estudiante).grupoClase) {
        (editForm.value as Estudiante).grupoClase = null;
      }

      this.apiService.enviarPeticionPut(this.urlEstudiante, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Estudiante ' + (data as Estudiante).nombre + ' actualizado satisfactoriamente.');
          this.mostrarEstudiante(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionActualizarEvaluacion(editForm: FormGroup): void {
    if (editForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea editar la evaluación al estudiante ' + (editForm.value as Evaluacion).estudiante.nombre + '?')) {
      this.apiService.enviarPeticionPut(this.urlEvaluacion, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Evaluación a ' + (data as Evaluacion).estudiante.nombre + ' actualizada satisfactoriamente.');
          this.editarEstudiante((data as Evaluacion).estudiante);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminarEstudiante(estudiante: Estudiante): void {
    if (confirm('¿Desea deshabilitar el estudiante ' + estudiante.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.urlEstudiante, estudiante.id).subscribe(data => {
        alert('Estudiante ' + (data as Estudiante).nombre + ' deshabilitado satisfactoriamente.');
        this.listarEstudiantes();
      });
    }
  }

  peticionEliminarEvaluacion(evaluacion: Evaluacion): void {
    if (confirm('¿Desea eliminar la evaluación a ' + evaluacion.estudiante.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.urlEvaluacion, evaluacion.id).subscribe(data => {
        alert('Evaluación a ' + (data as Evaluacion).estudiante.nombre + ' eliminada satisfactoriamente.');
        this.mostrarEstudiante((data as Evaluacion).estudiante);
      });
    }
  }

  obtenerEstados(): Observable<any> {
    return this.estadoService.peticionListar();
  }

  obtenerFacultades(): Observable<any> {
    return this.facultadService.peticionListar();
  }

  obtenerGradosEscolar(): Observable<any> {
    return this.gradoEscolarService.peticionListar();
  }

  // TODO add militancia control
  obtenerMilitancias(): Observable<any> {
    return this.apiService.enviarPeticionGet('militancia/');
  }

  obtenerEscuelas(): Observable<any> {
    return this.escuelaService.peticionListar();
  }

  // TODO add grupo clase control y peticion sin asignar
  obtenerGruposClase(): Observable<any> {
    return this.apiService.enviarPeticionGet('grupoclase/sinasignar');
  }

  // TODO
  obtenerValoresEvaluacion(): Observable<any> {
    return this.apiService.enviarPeticionGet('valorevaluacion/');
  }

  obtenerEvaluaciones(): Observable<any> {
    const estudianteId = window.localStorage.getItem('estudianteId');
    if (!estudianteId) {
      alert('Acción inválida.');
      this.listarEstudiantes();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.urlEvaluacion + this.urlEstudiante, +estudianteId);
  }

  formatoFecha(fecha: Date): string {
    return this.datePipe.transform(fecha, 'dd/MM/yyyy');
  }

}
