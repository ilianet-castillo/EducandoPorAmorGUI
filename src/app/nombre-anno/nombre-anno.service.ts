import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {NombreAnno} from '../modelo/nombreanno.model';
import {NivelEnsennanza} from '../modelo/nivelensennanza.model';

@Injectable({
  providedIn: 'root'
})
export class NombreAnnoService {

  url = 'nombreanno/';

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

  listarNombresAnno(): void {
    this.router.navigate(['listar-nombreanno']);
  }

  adicionarNombreAnno(): void {
    this.router.navigate(['adicionar-nombreanno']);
  }

  editarNombreAnno(nombreAnno: NombreAnno): void {
    window.localStorage.removeItem('nombreAnnoId');
    window.localStorage.setItem('nombreAnnoId', nombreAnno.id.toString());
    this.router.navigate(['editar-nombreanno']);
  }

  mostrarNombreAnno(nombreAnno: NombreAnno): void {
    window.localStorage.removeItem('nombreAnnoId');
    window.localStorage.setItem('nombreAnnoId', nombreAnno.id.toString());
    this.router.navigate(['mostrar-nombreanno']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const nombreAnnoId = window.localStorage.getItem('nombreAnnoId');
    if (!nombreAnnoId) {
      alert('Acción inválida.');
      this.listarNombresAnno();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +nombreAnnoId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el nombre del año?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Nombre del año ' + (data as NombreAnno).nombre + ' adicionado satisfactoriamente.');
          this.listarNombresAnno();
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

    if (confirm('¿Desea actualizar el nombre del año?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Nombre del año ' + (data as NombreAnno).nombre + ' actualizado satisfactoriamente.');
          this.mostrarNombreAnno(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(nombreanno: NombreAnno): void {
    if (confirm('¿Desea deshabilitar el nombre del año ' + nombreanno.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.url, nombreanno.id).subscribe(data => {
        alert('Nombre del año ' + (data as NombreAnno).nombre + ' deshabilitado satisfactoriamente.');
        this.listarNombresAnno();
      });
    }
  }

}
