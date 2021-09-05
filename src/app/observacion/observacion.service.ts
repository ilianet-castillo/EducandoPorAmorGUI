import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {Observacion} from '../modelo/observacion.model';
import {RespuestaObservacion} from '../modelo/respuestaobservacion.model';

@Injectable({
  providedIn: 'root'
})
export class ObservacionService {

  urlObservacion = 'observacion/';
  urlRespuestaObservacion = 'respuestaobservacion/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  getFormObservacion(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      titulo: ['', Validators.required],
      cuerpo: ['', Validators.required]
    });
  }

  getFormRespuestaObservacion(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      observacion: [''],
      cuerpo: ['', Validators.required],
    });
  }

  listarObservaciones(): void {
    this.router.navigate(['listar-observacion']);
  }

  adicionarObservacion(): void {
    this.router.navigate(['adicionar-observacion']);
  }

  adicionarRespuestaObservacion(): void {
    const observacionId = window.localStorage.getItem('observacionId');
    if (!observacionId) {
      alert('Acción inválida.');
      this.listarObservaciones();
      return;
    }

    this.router.navigate(['adicionar-respuestaobservacion']);
  }

  editarObservacion(observacion: Observacion): void {
    window.localStorage.removeItem('observacionId');
    window.localStorage.setItem('observacionId', observacion.id.toString());
    this.router.navigate(['editar-observacion']);
  }

  editarRespuestaObservacion(respuestaObservacion: RespuestaObservacion): void {
    window.localStorage.removeItem('respuestaObservacionId');
    window.localStorage.setItem('respuestaObservacionId', respuestaObservacion.id.toString());
    this.router.navigate(['editar-respuestaobservacion']);
  }

  mostrarObservacion(observacion: Observacion): void {
    window.localStorage.removeItem('observacionId');
    window.localStorage.setItem('observacionId', observacion.id.toString());
    this.router.navigate(['mostrar-observacion']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.urlObservacion);
  }

  peticionObtenerObservacion(): Observable<any> {
    const observacionId = window.localStorage.getItem('observacionId');
    if (!observacionId) {
      alert('Acción inválida.');
      this.listarObservaciones();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.urlObservacion, +observacionId);
  }

  peticionObtenerRespuestaObservacion(): Observable<any> {
    const respuestaObservacionId = window.localStorage.getItem('respuestaObservacionId');
    if (!respuestaObservacionId) {
      alert('Acción inválida.');
      this.listarObservaciones();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.urlRespuestaObservacion, +respuestaObservacionId);
  }

  peticionAdicionarObservacion(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar la observación?')) {
      this.apiService.enviarPeticionPost(this.urlObservacion, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Observación ' + (data as Observacion).titulo + ' adicionada satisfactoriamente.');
          this.listarObservaciones();
        },
        error => {
          alert(error);
        });
    }
  }

  peticionAdicionarRespuestaObservacion(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar la respuesta a la observación ' + (addForm.value as RespuestaObservacion).observacion.titulo + '?')) {
      this.apiService.enviarPeticionPost(this.urlRespuestaObservacion, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Respuesta a la observación ' + (data as RespuestaObservacion).observacion.titulo + ' adicionada satisfactoriamente.');
          this.editarObservacion((data as RespuestaObservacion).observacion);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionActualizarObservacion(editForm: FormGroup): void {
    if (editForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar la observacion?')) {
      this.apiService.enviarPeticionPut(this.urlObservacion, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Observacion ' + (data as Observacion).titulo + ' actualizada satisfactoriamente.');
          this.mostrarObservacion(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionActualizarRespuestaObservacion(editForm: FormGroup): void {
    if (editForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea actualizar la evaluación?')) {
      this.apiService.enviarPeticionPut(this.urlRespuestaObservacion, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Evaluación a ' + (data as RespuestaObservacion).observacion.titulo + ' actualizada satisfactoriamente.');
          this.editarObservacion((data as RespuestaObservacion).observacion);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminarObservacion(observacion: Observacion): void {
    if (confirm('¿Desea eliminar la observación ' + observacion.titulo + '?')) {
      this.apiService.enviarPeticionDelete(this.urlObservacion, observacion.id).subscribe(data => {
        alert('Observación ' + (data as Observacion).titulo + ' eliminada satisfactoriamente.');
        this.listarObservaciones();
      });
    }
  }

  peticionEliminarRespuestaObservacion(respuestaObservacion: RespuestaObservacion): void {
    if (confirm('¿Desea eliminar la evaluación a ' + respuestaObservacion.observacion.titulo + '?')) {
      this.apiService.enviarPeticionDelete(this.urlRespuestaObservacion, respuestaObservacion.id).subscribe(data => {
        alert('Evaluación a ' + (data as RespuestaObservacion).observacion.titulo + ' eliminada satisfactoriamente.');
        this.listarObservaciones();
      });
    }
  }

  obtenerRespuestasObservacion(): Observable<any> {
    const observacionId = window.localStorage.getItem('observacionId');
    if (!observacionId) {
      alert('Acción inválida.');
      this.listarObservaciones();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.urlRespuestaObservacion + this.urlObservacion, +observacionId);
  }

}
