import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {GradoEscolar} from '../modelo/gradoescolar.model';
import {Estado} from '../modelo/estado.model';

@Injectable({
  providedIn: 'root'
})
export class GradoEscolarService {

  url = 'gradoescolar/';

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

  listarGradosEscolares(): void {
    this.router.navigate(['listar-gradoescolar']);
  }

  adicionarGradoEscolar(): void {
    this.router.navigate(['adicionar-gradoescolar']);
  }

  editarGradoEscolar(gradoEscolar: GradoEscolar): void {
    window.localStorage.removeItem('gradoEscolarId');
    window.localStorage.setItem('gradoEscolarId', gradoEscolar.id.toString());
    this.router.navigate(['editar-gradoescolar']);
  }

  mostrarGradoEscolar(gradoEscolar: GradoEscolar): void {
    window.localStorage.removeItem('gradoEscolarId');
    window.localStorage.setItem('gradoEscolarId', gradoEscolar.id.toString());
    this.router.navigate(['mostrar-gradoescolar']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const gradoEscolarId = window.localStorage.getItem('gradoEscolarId');
    if (!gradoEscolarId) {
      alert('Acción inválida.');
      this.listarGradosEscolares();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +gradoEscolarId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el grado escolar ' + (addForm.value as GradoEscolar).nombre + '?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Grado escolar ' + (data as GradoEscolar).nombre + ' adicionado satisfactoriamente.');
          this.listarGradosEscolares();
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

    if (confirm('¿Desea actualizar el grado escolar '  + (editForm.value as GradoEscolar).nombre +  '?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Grado escolar ' + (data as GradoEscolar).nombre + ' actualizado satisfactoriamente.');
          this.mostrarGradoEscolar(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(gradoEscolar: GradoEscolar): void {
    if (confirm('¿Desea deshabilitar el grado escolar ' + gradoEscolar.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.url, gradoEscolar.id).subscribe(data => {
        alert('Grado escolar ' + (data as GradoEscolar).nombre + ' deshabilitado satisfactoriamente.');
        this.listarGradosEscolares();
      });
    }
  }

}
