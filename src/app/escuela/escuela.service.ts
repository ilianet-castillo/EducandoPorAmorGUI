import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {Escuela} from '../modelo/escuela.model';
import {NivelEnsennanzaService} from '../nivel-ensennanza/nivel-ensennanza.service';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  url = 'escuela/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private nivelEnsennanzaService: NivelEnsennanzaService,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      habilitado: ['', Validators.required],
      municipio: ['', Validators.required],
      gradosEscolares: [''],
      asignaturas: [''],
      nivelEnsennanza: ['', Validators.required]
    });
  }

  listarEscuelas(): void {
    this.router.navigate(['listar-escuela']);
  }

  adicionarEscuela(): void {
    this.router.navigate(['adicionar-escuela']);
  }

  editarEscuela(escuela: Escuela): void {
    window.localStorage.removeItem('escuelaId');
    window.localStorage.setItem('escuelaId', escuela.id.toString());
    this.router.navigate(['editar-escuela']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const escuelaId = window.localStorage.getItem('escuelaId');
    if (!escuelaId) {
      alert('Acción inválida.');
      this.listarEscuelas();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +escuelaId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar la escuela ' + (addForm.value as Escuela).nombre + '?')) {
      if (!(addForm.value as Escuela).gradosEscolares) {
        (addForm.value as Escuela).gradosEscolares = null;
      }

      if (!(addForm.value as Escuela).asignaturas) {
        (addForm.value as Escuela).asignaturas = null;
      }

      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Escuela ' + (data as Escuela).nombre + ' adicionada satisfactoriamente.');
          this.listarEscuelas();
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

    if (confirm('¿Desea actualizar la escuela ' + (editForm.value as Escuela).nombre + '?')) {
      if (!(editForm.value as Escuela).gradosEscolares) {
        (editForm.value as Escuela).gradosEscolares = null;
      }

      if (!(editForm.value as Escuela).asignaturas) {
        (editForm.value as Escuela).asignaturas = null;
      }

      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Escuela ' + (data as Escuela).nombre + ' actualizada satisfactoriamente.');
          this.mostrarEscuela(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(escuela: Escuela): void {
    if (confirm('¿Desea deshabilitar la escuela ' + escuela.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.url, escuela.id).subscribe(data => {
        alert('Escuela ' + (data as Escuela).nombre + ' deshabilitada satisfactoriamente.');
        this.listarEscuelas();
      });
    }
  }

  mostrarEscuela(escuela: Escuela): void {
    window.localStorage.removeItem('escuelaId');
    window.localStorage.setItem('escuelaId', escuela.id.toString());
    this.router.navigate(['mostrar-escuela']);
  }

  // TODO add municipio control
  obtenerMunicipios(): Observable<any> {
    return this.apiService.enviarPeticionGet('municipio/');
  }

  // TODO add gradoescolar control
  obtenerGradosEscolares(): Observable<any> {
    return this.apiService.enviarPeticionGet('gradoescolar/');
  }

  // TODO add asignatura control
  obtenerAsignaturas(): Observable<any> {
    return this.apiService.enviarPeticionGet('asignatura/');
  }

  obtenerNivelesEnsennanzas(): Observable<any> {
    return this.nivelEnsennanzaService.peticionListar();
  }

}
