import {Component, OnInit} from '@angular/core';
import {Estado} from '../../modelo/estado.model';
import {Escuela} from '../../modelo/escuela.model';
import {Facultad} from '../../modelo/facultad.model';
import {GradoEscolar} from '../../modelo/gradoescolar.model';
import {Militancia} from '../../modelo/militancia.model';
import {NivelEnsennanza} from '../../modelo/nivelensennanza.model';
import {Asignatura} from '../../modelo/asignatura.model';
import {Router} from '@angular/router';
import {ApiService} from '../../api.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-listar-reportes',
  templateUrl: './listar-reportes.component.html',
  styleUrls: ['./listar-reportes.component.css']
})
export class ListarReportesComponent implements OnInit {

  form: FormGroup;
  estados: Estado[];
  escuelas: Escuela[];
  facultades: Facultad[];
  gradoEscolares: GradoEscolar[];
  militancias: Militancia[];
  nivelDeEnsennanzas: NivelEnsennanza[];
  asignaturas: Asignatura[];

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.enviarPeticionGet('estado/')
      .subscribe(data => {
        this.estados = data as Estado[];
      });

    this.apiService.enviarPeticionGet('escuela/')
      .subscribe(data => {
        this.escuelas = data as Escuela[];
      });

    this.apiService.enviarPeticionGet('facultad/')
      .subscribe(data => {
        this.facultades = data as Facultad[];
      });

    this.apiService.enviarPeticionGet('gradoescolar/')
      .subscribe(data => {
        this.gradoEscolares = data as GradoEscolar[];
      });

    this.apiService.enviarPeticionGet('militancia/')
      .subscribe(data => {
        this.militancias = data as Militancia[];
      });

    this.apiService.enviarPeticionGet('nivelensennanza/')
      .subscribe(data => {
        this.nivelDeEnsennanzas = data as NivelEnsennanza[];
      });

    this.apiService.enviarPeticionGet('asignatura/')
      .subscribe(data => {
        this.asignaturas = data as Asignatura[];
      });

    this.form = this.formBuilder.group({
      estado: [''],
      escuela: [''],
      facultad: [''],
      gradoEscolar: [''],
      militancia: [''],
      nivelDeEnsennanza: [''],
      gradoEscolarGrupo: [''],
      asignatura: [''],
      gradoEscolar1: [''],
      facultad1: [''],
      militancia1: [''],
      gradoEscolar2: [''],
      nivelDeEnsennanza2: [''],
      asignatura2: ['']
    });
  }

  reportePorEstado(): void {
    window.localStorage.removeItem('reporteId');
    window.localStorage.removeItem('reporteTipo');
    window.localStorage.setItem('reporteId', (this.form.get('estado').value as Estado).id.toString());
    window.localStorage.setItem('reporteTipo', 'porestado/');
    this.router.navigate(['mostrar-reporte']);
  }

  reportePorEscuela(): void {
    window.localStorage.removeItem('reporteId');
    window.localStorage.removeItem('reporteTipo');
    window.localStorage.setItem('reporteId', (this.form.get('escuela').value as Escuela).id.toString());
    window.localStorage.setItem('reporteTipo', 'porescuela/');
    this.router.navigate(['mostrar-reporte']);
  }

  reportePorFacultad(): void {
    window.localStorage.removeItem('reporteId');
    window.localStorage.removeItem('reporteTipo');
    window.localStorage.setItem('reporteId', (this.form.get('facultad').value as Facultad).id.toString());
    window.localStorage.setItem('reporteTipo', 'porfacultad/');
    this.router.navigate(['mostrar-reporte']);
  }

  reportePorGradoEscolar(): void {
    window.localStorage.removeItem('reporteId');
    window.localStorage.removeItem('reporteTipo');
    window.localStorage.setItem('reporteId', (this.form.get('grupoClase').value as GradoEscolar).id.toString());
    window.localStorage.setItem('reporteTipo', 'porgradoescolar/');
    this.router.navigate(['mostrar-reporte']);
  }

  reportePorMilitancia(): void {
    window.localStorage.removeItem('reporteId');
    window.localStorage.removeItem('reporteTipo');
    window.localStorage.setItem('reporteId', (this.form.get('militancia').value as Militancia).id.toString());
    window.localStorage.setItem('reporteTipo', 'pormilitancia/');
    this.router.navigate(['mostrar-reporte']);
  }

  reportePorNivelEnsennanza(): void {
    window.localStorage.removeItem('reporteId');
    window.localStorage.removeItem('reporteTipo');
    window.localStorage.setItem('reporteId', (this.form.get('nivelDeEnsennanza').value as NivelEnsennanza).id.toString());
    window.localStorage.setItem('reporteTipo', 'porniveldeensennanza/');
    this.router.navigate(['mostrar-reporte']);
  }

  reportePorGradoEscolarDocencia(): void {
    window.localStorage.removeItem('reporteId');
    window.localStorage.removeItem('reporteTipo');
    window.localStorage.setItem('reporteId', (this.form.get('gradoEscolarGrupo').value as GradoEscolar).id.toString());
    window.localStorage.setItem('reporteTipo', 'porgradoescolargrupo/');
    this.router.navigate(['mostrar-reporte']);
  }

  reportePorAsignatura(): void {
    window.localStorage.removeItem('reporteId');
    window.localStorage.removeItem('reporteTipo');
    window.localStorage.setItem('reporteId', (this.form.get('asignatura').value as Asignatura).id.toString());
    window.localStorage.setItem('reporteTipo', 'porasignatura/');
    this.router.navigate(['mostrar-reporte']);
  }

  reportePorGradoEscolarFacultadMilitancia(): void {
    window.localStorage.removeItem('reporteId');
    window.localStorage.removeItem('reporteTipo');
    window.localStorage.setItem('reporteId',
      (this.form.get('gradoEscolar1').value as Asignatura).id.toString() + '/' +
      (this.form.get('facultad1').value as Facultad).id.toString() + '/' +
      (this.form.get('militancia1').value as Facultad).id.toString()
    );
    window.localStorage.setItem('reporteTipo', 'porgradoescolarfacultadmilitancia/');
    this.router.navigate(['mostrar-reporte']);
  }

  reportePorGradoEscolarNivelDeEnsennanzaAsignatura(): void {
    window.localStorage.removeItem('reporteId');
    window.localStorage.removeItem('reporteTipo');
    window.localStorage.setItem('reporteId',
      (this.form.get('gradoEscolar2').value as Asignatura).id.toString() + '/' +
      (this.form.get('nivelDeEnsennanza2').value as Facultad).id.toString() + '/' +
      (this.form.get('asignatura2').value as Facultad).id.toString()
    );
    window.localStorage.setItem('reporteTipo', 'porgradoescolarescuelaasignatura/');
    this.router.navigate(['mostrar-reporte']);
  }

}
