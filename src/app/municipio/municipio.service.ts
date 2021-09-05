import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {Municipio} from '../modelo/municipio.model';
import {ProvinciaService} from '../provincia/provincia.service';
import {Militancia} from '../modelo/militancia.model';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  url = 'municipio/';

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private provinciaService: ProvinciaService,
              private router: Router) {
  }

  getForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      habilitado: [''],
      provincia: ['', Validators.required]
    });
  }

  listarMunicipios(): void {
    this.router.navigate(['listar-municipio']);
  }

  adicionarMunicipio(): void {
    this.router.navigate(['adicionar-municipio']);
  }

  editarMunicipio(municipio: Municipio): void {
    window.localStorage.removeItem('municipioId');
    window.localStorage.setItem('municipioId', municipio.id.toString());
    this.router.navigate(['editar-municipio']);
  }

  mostrarMunicipio(municipio: Municipio): void {
    window.localStorage.removeItem('municipioId');
    window.localStorage.setItem('municipioId', municipio.id.toString());
    this.router.navigate(['mostrar-municipio']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const municipioId = window.localStorage.getItem('municipioId');
    if (!municipioId) {
      alert('Acción inválida.');
      this.listarMunicipios();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +municipioId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el municipio?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Municipio ' + (data as Municipio).nombre + ' adicionada satisfactoriamente.');
          this.listarMunicipios();
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

    if (confirm('¿Desea actualizar el municipio?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Municipio ' + (data as Municipio).nombre + ' actualizada satisfactoriamente.');
          this.mostrarMunicipio(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(municipio: Municipio): void {
    if (confirm('¿Desea deshabilitar el municipio ' + municipio.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.url, municipio.id).subscribe(data => {
        alert('Municipio ' + (data as Municipio).nombre + ' deshabilitado satisfactoriamente.');
        this.listarMunicipios();
      });
    }
  }

  obtenerProvincias(): Observable<any> {
    return this.provinciaService.peticionListar();
  }

}
