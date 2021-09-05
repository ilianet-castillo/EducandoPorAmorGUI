import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {Provincia} from '../modelo/provincia.model';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  url = 'provincia/';

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

  listarProvincias(): void {
    this.router.navigate(['listar-provincia']);
  }

  adicionarProvincia(): void {
    this.router.navigate(['adicionar-provincia']);
  }

  editarProvincia(provincia: Provincia): void {
    window.localStorage.removeItem('provinciaId');
    window.localStorage.setItem('provinciaId', provincia.id.toString());
    this.router.navigate(['editar-provincia']);
  }

  mostrarProvincia(provincia: Provincia): void {
    window.localStorage.removeItem('provinciaId');
    window.localStorage.setItem('provinciaId', provincia.id.toString());
    this.router.navigate(['mostrar-provincia']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const provinciaId = window.localStorage.getItem('provinciaId');
    if (!provinciaId) {
      alert('Acción inválida.');
      this.listarProvincias();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +provinciaId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar la provincia?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Provincia ' + (data as Provincia).nombre + ' adicionada satisfactoriamente.');
          this.listarProvincias();
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

    if (confirm('¿Desea actualizar la provincia?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Provincia ' + (data as Provincia).nombre + ' actualizada satisfactoriamente.');
          // TODO mostrarProvincia
          this.listarProvincias();
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(provincia: Provincia): void {
    if (confirm('¿Desea deshabilitar la provincia ' + provincia.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.url, provincia.id).subscribe(data => {
        alert('Provincia ' + (data as Provincia).nombre + ' deshabilitada satisfactoriamente.');
        this.listarProvincias();
      });
    }
  }

}
