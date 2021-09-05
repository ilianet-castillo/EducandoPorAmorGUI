import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {first} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {NivelEnsennanza} from '../modelo/nivelensennanza.model';
import {Observable} from 'rxjs';
import {Municipio} from '../modelo/municipio.model';

@Injectable({
  providedIn: 'root'
})
export class NivelEnsennanzaService {

  url = 'nivelensennanza/';

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

  listarNivelesEnsennanza(): void {
    this.router.navigate(['listar-nivelensennanza']);
  }

  adicionarNivelEnsennanza(): void {
    this.router.navigate(['adicionar-nivelensennanza']);
  }

  editarNivelEnsennanza(nivelEnsennanza: NivelEnsennanza): void {
    window.localStorage.removeItem('nivelEnsennanzaId');
    window.localStorage.setItem('nivelEnsennanzaId', nivelEnsennanza.id.toString());
    this.router.navigate(['editar-nivelensennanza']);
  }

  mostrarNivelEnsennanza(nivelEnsennanza: NivelEnsennanza): void {
    window.localStorage.removeItem('nivelEnsennanzaId');
    window.localStorage.setItem('nivelEnsennanzaId', nivelEnsennanza.id.toString());
    this.router.navigate(['mostrar-nivelensennanza']);
  }

  peticionListar(): Observable<any> {
    return this.apiService.enviarPeticionGet(this.url);
  }

  peticionObtener(): Observable<any> {
    const nivelEnsennanzaId = window.localStorage.getItem('nivelEnsennanzaId');
    if (!nivelEnsennanzaId) {
      alert('Acción inválida.');
      this.listarNivelesEnsennanza();
      return;
    }

    return this.apiService.enviarPeticionGetPorId(this.url, +nivelEnsennanzaId);
  }

  peticionAdicionar(addForm: FormGroup): void {
    if (addForm.invalid) {
      alert('Campos obligatorios sin llenar.');
      return;
    }

    if (confirm('¿Desea adicionar el Nivel de Enseñanza?')) {
      this.apiService.enviarPeticionPost(this.url, addForm.value).pipe(first()).subscribe(
        data => {
          alert('Nivel de Enseñanza ' + (data as NivelEnsennanza).nombre + ' adicionada satisfactoriamente.');
          this.listarNivelesEnsennanza();
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

    if (confirm('¿Desea actualizar el Nivel de Enseñanza?')) {
      this.apiService.enviarPeticionPut(this.url, editForm.value).pipe(first()).subscribe(
        data => {
          alert('Nivel de Enseñanza ' + (data as NivelEnsennanza).nombre + ' actualizada satisfactoriamente.');
          this.mostrarNivelEnsennanza(data);
        },
        error => {
          alert(error);
        });
    }
  }

  peticionEliminar(nivelEnsennanza: NivelEnsennanza): void {
    if (confirm('¿Desea deshabilitar el Nivel de Enseñanza ' + nivelEnsennanza.nombre + '?')) {
      this.apiService.enviarPeticionDelete(this.url, nivelEnsennanza.id).subscribe(data => {
        alert('Nivel de Enseñanza ' + (data as NivelEnsennanza).nombre + ' deshabilitada satisfactoriamente.');
        this.listarNivelesEnsennanza();
      });
    }
  }

}
