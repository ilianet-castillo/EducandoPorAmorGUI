import {Component, OnInit} from '@angular/core';
import {NivelEnsennanza} from '../../modelo/nivelensennanza.model';
import {NivelEnsennanzaService} from '../nivel-ensennanza.service';

@Component({
  selector: 'app-mostrar-nivel-ensennanza',
  templateUrl: './mostrar-nivel-ensennanza.component.html',
  styleUrls: ['./mostrar-nivel-ensennanza.component.css']
})
export class MostrarNivelEnsennanzaComponent implements OnInit {

  nivelEnsennanza: NivelEnsennanza;

  constructor(private nivelEnsennanzaService: NivelEnsennanzaService) {
  }

  ngOnInit(): void {
    this.nivelEnsennanzaService.peticionObtener().subscribe(data => {
      this.nivelEnsennanza = data as NivelEnsennanza;
    });
  }

  cancelar(): void {
    this.nivelEnsennanzaService.listarNivelesEnsennanza();
  }

  eliminarNivelEnsennanza(): void {
    this.nivelEnsennanzaService.peticionEliminar(this.nivelEnsennanza);
  }

  editarNivelEnsennanza(): void {
    this.nivelEnsennanzaService.editarNivelEnsennanza(this.nivelEnsennanza);
  }

}
