import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {Militancia} from '../modelo/militancia.model';

@Injectable({
  providedIn: 'root'
})
export class MilitanciaService {

  url = 'militancia/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      tipo: ['', Validators.required],
      habilitado: ['']
    });
  }

  listarMilitancias(): void {
    this.router.navigate(['listar-militancia']);
  }

  adicionarMilitancia(): void {
    this.router.navigate(['adicionar-militancia']);
  }

  editarMilitancia(militancia: Militancia): void {
    window.localStorage.removeItem('militanciaId');
    window.localStorage.setItem('militanciaId', militancia.id.toString());
    this.router.navigate(['editar-militancia']);
  }

  mostrarMilitancia(militancia: Militancia): void {
    window.localStorage.removeItem('militanciaId');
    window.localStorage.setItem('militanciaId', militancia.id.toString());
    this.router.navigate(['mostrar-militancia']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const militanciaId = window.localStorage.getItem('militanciaId');
    if (!militanciaId) {
      alert('Acción inválida.');
      this.listarMilitancias();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +militanciaId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar la militancia ' + (addForm.value as Militancia).tipo + '?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Militancia ' + (data as Militancia).tipo + ' adicionada satisfactoriamente.');
          this.listarMilitancias();
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

    if (confirm('¿Desea actualizar la militancia ' + (editForm.value as Militancia).tipo + '?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Militancia ' + (data as Militancia).tipo + ' actualizada satisfactoriamente.');
          this.mostrarMilitancia(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(militancia: Militancia): void {
    if (confirm('¿Desea deshabilitar la militancia ' + militancia.tipo + '?')) {
      this.apiService.enviarPeticionDelete(this.url, militancia.id).subscribe(data => {
        alert('Militancia ' + (data as Militancia).tipo + ' deshabilitada satisfactoriamente.');
        this.listarMilitancias();
      });
    }
  }

}
