import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {Estado} from '../modelo/estado.model';
import {Asignatura} from '../modelo/asignatura.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  url = 'estado/';

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

  listarEstados(): void {
    this.router.navigate(['listar-estado']);
  }

  adicionarEstado(): void {
    this.router.navigate(['adicionar-estado']);
  }

  editarEstado(estado: Estado): void {
    window.localStorage.removeItem('estadoId');
    window.localStorage.setItem('estadoId', estado.id.toString());
    this.router.navigate(['editar-estado']);
  }

  mostrarEstado(estado: Estado): void {
    window.localStorage.removeItem('estadoId');
    window.localStorage.setItem('estadoId', estado.id.toString());
    this.router.navigate(['mostrar-estado']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const estadoId = window.localStorage.getItem('estadoId');
    if (!estadoId) {
      alert('Acción inválida.');
      this.listarEstados();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +estadoId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el estado ' + (addForm.value as Estado).nombre + '?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Estado ' + (data as Estado).nombre + ' adicionado satisfactoriamente.');
          this.listarEstados();
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

    if (confirm('¿Desea actualizar el estado ' + (editForm.value as Estado).nombre + '?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Estado ' + (data as Estado).nombre + ' actualizado satisfactoriamente.');
          this.mostrarEstado(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(estado: Estado): void {
    if (confirm('¿Desea deshabilitar el estado ' + estado.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.url, estado.id).subscribe(data => {
        alert('Estado ' + (data as Estado).nombre + ' deshabilitado satisfactoriamente.');
        this.listarEstados();
      });
    }
  }

}
