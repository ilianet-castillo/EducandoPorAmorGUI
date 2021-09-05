import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Estado} from '../modelo/estado.model';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {GrupoClase} from '../modelo/grupoclase.model';
import {AsignaturaService} from '../asignatura/asignatura.service';
import {GrupoDocenteService} from '../grupo-docente/grupo-docente.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoClaseService {

  url = 'grupoclase/';

  constructor(private apiService: ApiService,
              private asignaturaService: AsignaturaService,
              private formBuilder: FormBuilder,
              private grupoDocenteService: GrupoDocenteService,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      habilitado: [''],
      grupoDocente: ['', Validators.required],
      asignatura: ['', Validators.required]
    });
  }

  listarGruposClase(): void {
    this.router.navigate(['listar-grupoclase']);
  }

  adicionarGrupoClase(): void {
    this.router.navigate(['adicionar-grupoclase']);
  }

  editarGrupoClase(grupoClase: GrupoClase): void {
    window.localStorage.removeItem('grupoClaseId');
    window.localStorage.setItem('grupoClaseId', grupoClase.id.toString());
    this.router.navigate(['editar-grupoclase']);
  }

  mostrarGrupoClase(grupoClase: GrupoClase): void {
    window.localStorage.removeItem('grupoclaseId');
    window.localStorage.setItem('grupoclaseId', grupoClase.id.toString());
    this.router.navigate(['mostrar-grupoclase']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const grupoClaseId = window.localStorage.getItem('grupoclaseId');
    if (!grupoClaseId) {
      alert('Acción inválida.');
      this.listarGruposClase();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +grupoClaseId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el grupo clase?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Grupo clase adicionado satisfactoriamente.');
          this.listarGruposClase();
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

    if (confirm('¿Desea actualizar el grupo clase?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Grupo clase actualizado satisfactoriamente.');
          this.mostrarGrupoClase(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(grupoClase: GrupoClase): void {
    if (confirm('¿Desea deshabilitar el grupo clase?')) {
      this.apiService.enviarPeticionDelete(this.url, grupoClase.id).subscribe(data => {
        alert('Grupo clase deshabilitado satisfactoriamente.');
        this.listarGruposClase();
      });
    }
  }

  obtenerAsignaturas(): Observable<any> {
    return this.asignaturaService.peticionListar();
  }

  obtenerGruposDocente(): Observable<any> {
    return this.grupoDocenteService.peticionListar();
  }

}
