import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../api.service';
import {Estudiante} from '../../modelo/estudiante.model';

@Component({
  selector: 'app-mostrar-reportes',
  templateUrl: './mostrar-reportes.component.html',
  styleUrls: ['./mostrar-reportes.component.css']
})
export class MostrarReportesComponent implements OnInit {

  url = 'reportes/';
  estudiantes: Estudiante[];

  constructor(private router: Router, private apiService: ApiService) {
  }

  ngOnInit(): void {
    const reporteId = window.localStorage.getItem('reporteId');
    const tipo = window.localStorage.getItem('reporteTipo');
    if (!reporteId || !tipo) {
      alert('Invalid action');
      this.router.navigate(['listar-reporte']);
      return;
    }

    this.apiService.enviarPeticionReporte(this.url, tipo, reporteId)
      .subscribe(data => {
        this.estudiantes = data as Estudiante[];
      });
  }

}
