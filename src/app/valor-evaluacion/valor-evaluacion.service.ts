import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {ValorEvaluacion} from '../modelo/valorevaluacion.model';
import {Facultad} from '../modelo/facultad.model';

@Injectable({
  providedIn: 'root'
})
export class ValorEvaluacionService {

  url = 'valorevaluacion/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      valor: ['', Validators.required],
      habilitado: ['']
    });
  }

  listarValoresEvaluacion(): void {
    this.router.navigate(['listar-valorevaluacion']);
  }

  adicionarValorEvaluacion(): void {
    this.router.navigate(['adicionar-valorevaluacion']);
  }

  editarValorEvaluacion(valorEvaluacion: ValorEvaluacion): void {
    window.localStorage.removeItem('valorEvaluacionId');
    window.localStorage.setItem('valorEvaluacionId', valorEvaluacion.id.toString());
    this.router.navigate(['editar-valorevaluacion']);
  }

  mostrarValorEvaluacion(valorEvaluacion: ValorEvaluacion): void {
    window.localStorage.removeItem('valorEvaluacionId');
    window.localStorage.setItem('valorEvaluacionId', valorEvaluacion.id.toString());
    this.router.navigate(['mostrar-valorevaluacion']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const valorEvaluacionId = window.localStorage.getItem('valorEvaluacionId');
    if (!valorEvaluacionId) {
      alert('Acción inválida.');
      this.listarValoresEvaluacion();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +valorEvaluacionId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el valor de evaluación?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Valor de evaluación ' + (data as ValorEvaluacion).valor + ' adicionado satisfactoriamente.');
          this.listarValoresEvaluacion();
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

    if (confirm('¿Desea actualizar el valor de evaluación?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Valor de evaluación ' + (data as ValorEvaluacion).valor + ' actualizado satisfactoriamente.');
          // TODO mostrarValorEvaluacion
          this.listarValoresEvaluacion();
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(valorEvaluacion: ValorEvaluacion): void {
    if (confirm('¿Desea deshabilitar el valor de evaluación ' + valorEvaluacion.valor + '?')) {
      this.apiService.enviarPeticionDelete(this.url, valorEvaluacion.id).subscribe(data => {
        alert('Valor de evaluación ' + (data as ValorEvaluacion).valor + ' deshabilitado satisfactoriamente.');
        this.listarValoresEvaluacion();
      });
    }
  }

}
