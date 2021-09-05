import {Component, OnInit} from '@angular/core';
import {NivelEnsennanza} from '../../modelo/nivelensennanza.model';
import {NivelEnsennanzaService} from '../nivel-ensennanza.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-listar-nivelensennanza',
  templateUrl: './listar-nivel-ensennanza.component.html',
  styleUrls: ['./listar-nivel-ensennanza.component.css']
})
export class ListarNivelEnsennanzaComponent implements OnInit {

  nivelesEnsennanza: NivelEnsennanza[];
  nivelesEnsennanzaFiltradas: NivelEnsennanza[];
  nivelesEnsennanzaPaginadas: NivelEnsennanza[];
  tamannoPagina = 5;
  opcionesTamannoPagina = [5, 10, 25, 100];

  constructor(private nivelEnsennanzaService: NivelEnsennanzaService) {
  }

  ngOnInit(): void {
    this.nivelEnsennanzaService.peticionListar().subscribe(data => {
      this.nivelesEnsennanza = (data as NivelEnsennanza[]).sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.buscar(undefined);
    });
  }

  adicionarNivelEnsennanza(): void {
    this.nivelEnsennanzaService.adicionarNivelEnsennanza();
  }

  mostrarNivelEnsennanza(nivelEnsennanza: NivelEnsennanza): void {
    this.nivelEnsennanzaService.mostrarNivelEnsennanza(nivelEnsennanza);
  }

  subLista(pageIndex: number, pageSize: number) {
    this.nivelesEnsennanzaPaginadas = this.nivelesEnsennanzaFiltradas.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }

  paginar(event: PageEvent) {
    this.subLista(event.pageIndex, event.pageSize);
  }

  buscar(value: any) {
    if (value) {
      this.nivelesEnsennanzaFiltradas = this.nivelesEnsennanza.filter(s => {
        return s.nombre.includes(value);
      });
    } else {
      this.nivelesEnsennanzaFiltradas = this.nivelesEnsennanza;
    }

    this.tamannoPagina = 5;
    this.subLista(0, this.tamannoPagina);
  }

}
