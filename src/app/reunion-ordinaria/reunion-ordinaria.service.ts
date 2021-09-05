import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {DatePipe} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProvinciaService} from '../provincia/provincia.service';
import {ProfesorService} from '../profesor/profesor.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {ReunionOrdinaria} from '../modelo/reunionordinaria.model';

@Injectable({
  providedIn: 'root'
})
export class ReunionOrdinariaService {

  url = 'reunionordinaria/';

  constructor(private apiService: ApiService,
              private datePipe: DatePipe,
              private formBuilder: FormBuilder,
              private provinciaService: ProvinciaService,
              private profesorService: ProfesorService,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      titulo: ['', Validators.required],
      provincia: ['', Validators.required],
      fecha: new FormControl(new Date()),
      lugar: ['', Validators.required],
      hora: ['', Validators.required],
      asistenciaEstudiantes: ['', Validators.required],
      profesores: ['', Validators.required],
      ordenDelDia: ['', Validators.required],
      cuerpo: ['', Validators.required],
      acuerdos: ['', Validators.required],
      finalizacion: ['', Validators.required]
    });
  }

  listarReunionOrdinaria(): void {
    this.router.navigate(['listar-reunionordinaria']);
  }

  adicionarReunionOrdinaria(): void {
    this.router.navigate(['adicionar-reunionordinaria']);
  }

  editarReunionOrdinaria(reunionOrdinaria: ReunionOrdinaria): void {
    window.localStorage.removeItem('reunionordinariaId');
    window.localStorage.setItem('reunionordinariaId', reunionOrdinaria.id.toString());
    this.router.navigate(['editar-reunionordinaria']);
  }

  mostrarReunionOrdinaria(reunionOrdinaria: ReunionOrdinaria): void {
    window.localStorage.removeItem('reunionordinariaId');
    window.localStorage.setItem('reunionordinariaId', reunionOrdinaria.id.toString());
    this.router.navigate(['mostrar-reunionordinaria']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const reunionOrdinariaId = window.localStorage.getItem('reunionordinariaId');
    if (!reunionOrdinariaId) {
      alert('Acción inválida.');
      this.listarReunionOrdinaria();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +reunionOrdinariaId);
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
          this.listarReunionOrdinaria();
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
          this.mostrarReunionOrdinaria(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(reunionOrdinaria: ReunionOrdinaria): void {
    if (confirm('¿Desea eliminar el activo de alumnos?')) {
      this.apiService.enviarPeticionDelete(this.url, reunionOrdinaria.id).subscribe(data => {
        alert('Activo de alumnos eliminado satisfactoriamente.');
        this.listarReunionOrdinaria();
      });
    }
  }

  formatoFecha(fecha: Date): string {
    return this.datePipe.transform(fecha, 'dd/MM/yyyy');
  }

  obtenerProvincias(): Observable<any> {
    return this.provinciaService.peticionListar();
  }

  obtenerProfesores(): Observable<any> {
    return this.profesorService.peticionListar();
  }

}
