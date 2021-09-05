import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DatePipe} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AutenticarComponent} from './autenticar/autenticar.component';
import {PrincipalComponent} from './principal/principal.component';
import {ListarAsignaturaComponent} from './asignatura/listar-asignatura/listar-asignatura.component';
import {AdicionarAsignaturaComponent} from './asignatura/adicionar-asignatura/adicionar-asignatura.component';
import {EditarAsignaturaComponent} from './asignatura/editar-asignatura/editar-asignatura.component';
import {ListarEstadoComponent} from './estado/listar-estado/listar-estado.component';
import {AdicionarEstadoComponent} from './estado/adicionar-estado/adicionar-estado.component';
import {EditarEstadoComponent} from './estado/editar-estado/editar-estado.component';
import {ListarRolComponent} from './rol/listar-rol/listar-rol.component';
import {AdicionarRolComponent} from './rol/adicionar-rol/adicionar-rol.component';
import {EditarRolComponent} from './rol/editar-rol/editar-rol.component';
import {ListarUsuarioComponent} from './usuario/listar-usuario/listar-usuario.component';
import {EditarUsuarioComponent} from './usuario/editar-usuario/editar-usuario.component';
import {AdicionarUsuarioComponent} from './usuario/adicionar-usuario/adicionar-usuario.component';
import {ListarFacultadComponent} from './facultad/listar-facultad/listar-facultad.component';
import {EditarFacultadComponent} from './facultad/editar-facultad/editar-facultad.component';
import {AdicionarFacultadComponent} from './facultad/adicionar-facultad/adicionar-facultad.component';
import {ListarNivelEnsennanzaComponent} from './nivel-ensennanza/listar-nivelensennanza/listar-nivel-ensennanza.component';
import {AdicionarNivelEnsennanzaComponent} from './nivel-ensennanza/adicionar-nivelensennanza/adicionar-nivel-ensennanza.component';
import {EditarNivelEnsennanzaComponent} from './nivel-ensennanza/editar-nivelensennanza/editar-nivel-ensennanza.component';
import {ListarMilitanciaComponent} from './militancia/listar-militancia/listar-militancia.component';
import {EditarMilitanciaComponent} from './militancia/editar-militancia/editar-militancia.component';
import {AdicionarMilitanciaComponent} from './militancia/adicionar-militancia/adicionar-militancia.component';
import {ListarNombreAnnoComponent} from './nombre-anno/listar-nombre-anno/listar-nombre-anno.component';
import {EditarNombreAnnoComponent} from './nombre-anno/editar-nombre-anno/editar-nombre-anno.component';
import {AdicionarNombreAnnoComponent} from './nombre-anno/adicionar-nombre-anno/adicionar-nombre-anno.component';
import {ListarObservacionComponent} from './observacion/listar-observacion/listar-observacion.component';
import {EditarObservacionComponent} from './observacion/editar-observacion/editar-observacion.component';
import {AdicionarObservacionComponent} from './observacion/adicionar-observacion/adicionar-observacion.component';
import {ListarProvinciaComponent} from './provincia/listar-provincia/listar-provincia.component';
import {EditarProvinciaComponent} from './provincia/editar-provincia/editar-provincia.component';
import {AdicionarProvinciaComponent} from './provincia/adicionar-provincia/adicionar-provincia.component';
import {ListarValorEvaluacionComponent} from './valor-evaluacion/listar-valore-valuacion/listar-valor-evaluacion.component';
import {EditarValorEvaluacionComponent} from './valor-evaluacion/editar-valor-evaluacion/editar-valor-evaluacion.component';
import {AdicionarValorEvaluacionComponent} from './valor-evaluacion/adicionar-valor-evaluacion/adicionar-valor-evaluacion.component';
import {ListarActivoAlumnoComponent} from './activo-alumnos/listar-activo-alumno/listar-activo-alumno.component';
import {EditarActivoAlumnoComponent} from './activo-alumnos/editar-activo-alumno/editar-activo-alumno.component';
import {AdicionarActivoAlumnoComponent} from './activo-alumnos/adicionar-activo-alumno/adicionar-activo-alumno.component';
import {ListarMunicipioComponent} from './municipio/listar-municipio/listar-municipio.component';
import {AdicionarMunicipioComponent} from './municipio/adicionar-municipio/adicionar-municipio.component';
import {EditarMunicipioComponent} from './municipio/editar-municipio/editar-municipio.component';
import {ListarGrupoDocenteComponent} from './grupo-docente/listar-grupo-docente/listar-grupo-docente.component';
import {EditarGrupoDocenteComponent} from './grupo-docente/editar-grupo-docente/editar-grupo-docente.component';
import {AdicionarGrupoDocenteComponent} from './grupo-docente/adicionar-grupo-docente/adicionar-grupo-docente.component';
import {ListarEscuelaComponent} from './escuela/listar-escuela/listar-escuela.component';
import {EditarEscuelaComponent} from './escuela/editar-escuela/editar-escuela.component';
import {AdicionarEscuelaComponent} from './escuela/adicionar-escuela/adicionar-escuela.component';
import {ListarEstudianteComponent} from './estudiante/listar-estudiante/listar-estudiante.component';
import {EditarEstudianteComponent} from './estudiante/editar-estudiante/editar-estudiante.component';
import {AdicionarEstudianteComponent} from './estudiante/adicionar-estudiante/adicionar-estudiante.component';
import {EditarEvaluacionComponent} from './estudiante/editar-evaluacion/editar-evaluacion.component';
import {AdicionarEvaluacionComponent} from './estudiante/adicionar-evaluacion/adicionar-evaluacion.component';
import {ListarGradoEscolarComponent} from './grado-escolar/listar-grado-escolar/listar-grado-escolar.component';
import {EditarGradoEscolarComponent} from './grado-escolar/editar-grado-escolar/editar-grado-escolar.component';
import {AdicionarGradoEscolarComponent} from './grado-escolar/adicionar-grado-escolar/adicionar-grado-escolar.component';
import {ListarGrupoClaseComponent} from './grupo-clase/listar-grupo-clase/listar-grupo-clase.component';
import {EditarGrupoClaseComponent} from './grupo-clase/editar-grupo-clase/editar-grupo-clase.component';
import {AdicionarGrupoClaseComponent} from './grupo-clase/adicionar-grupo-clase/adicionar-grupo-clase.component';
import {ListarProfesorComponent} from './profesor/listar-profesor/listar-profesor.component';
import {EditarProfesorComponent} from './profesor/editar-profesor/editar-profesor.component';
import {AdicionarProfesorComponent} from './profesor/adicionar-profesor/adicionar-profesor.component';
import {ListarReportesComponent} from './reportes/listar-reportes/listar-reportes.component';
import {ListarReunionOrdinariaComponent} from './reunion-ordinaria/listar-reunion-ordinaria/listar-reunion-ordinaria.component';
import {EditarReunionOrdinariaComponent} from './reunion-ordinaria/editar-reunion-ordinaria/editar-reunion-ordinaria.component';
import {AdicionarReunionOrdinariaComponent} from './reunion-ordinaria/adicionar-reunion-ordinaria/adicionar-reunion-ordinaria.component';
import {ListarVisitaEscuelaComponent} from './visita-escuela/listar-visita-escuela/listar-visita-escuela.component';
import {EditarVisitaEscuelaComponent} from './visita-escuela/editar-visita-escuela/editar-visita-escuela.component';
import {AdicionarVisitaEscuelaComponent} from './visita-escuela/adicionar-visita-escuela/adicionar-visita-escuela.component';
import {MostrarReportesComponent} from './reportes/mostrar-reportes/mostrar-reportes.component';
import {MostrarActivoAlumnoComponent} from './activo-alumnos/mostrar-activo-alumno/mostrar-activo-alumno.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MostrarEscuelaComponent} from './escuela/mostrar-escuela/mostrar-escuela.component';
import {MostrarEstudianteComponent} from './estudiante/mostrar-estudiante/mostrar-estudiante.component';
import {MostrarObservacionComponent} from './observacion/mostrar-observacion/mostrar-observacion.component';
import {AdicionarRespuestaobservacionComponent} from './observacion/adicionar-respuestaobservacion/adicionar-respuestaobservacion.component';
import {MostrarProfesorComponent} from './profesor/mostrar-profesor/mostrar-profesor.component';
import {MostrarUsuarioComponent} from './usuario/mostrar-usuario/mostrar-usuario.component';
import {EditarRespuestaobservacionComponent} from './observacion/editar-respuestaobservacion/editar-respuestaobservacion.component';
import {MostrarVisitaEscuelaComponent} from './visita-escuela/mostrar-visita-escuela/mostrar-visita-escuela.component';
import {MostrarReunionOrdinariaComponent} from './reunion-ordinaria/mostrar-reunion-ordinaria/mostrar-reunion-ordinaria.component';
import { MostrarAsignaturaComponent } from './asignatura/mostrar-asignatura/mostrar-asignatura.component';
import { MostrarEstadoComponent } from './estado/mostrar-estado/mostrar-estado.component';
import { MostrarFacultadComponent } from './facultad/mostrar-facultad/mostrar-facultad.component';
import { MostrarGradoEscolarComponent } from './grado-escolar/mostrar-grado-escolar/mostrar-grado-escolar.component';
import { MostrarGrupoClaseComponent } from './grupo-clase/mostrar-grupo-clase/mostrar-grupo-clase.component';
import { MostrarGrupoDocenteComponent } from './grupo-docente/mostrar-grupo-docente/mostrar-grupo-docente.component';
import { MostrarMilitanciaComponent } from './militancia/mostrar-militancia/mostrar-militancia.component';
import { MostrarMunicipioComponent } from './municipio/mostrar-municipio/mostrar-municipio.component';
import { MostrarNivelEnsennanzaComponent } from './nivel-ensennanza/mostrar-nivel-ensennanza/mostrar-nivel-ensennanza.component';
import { MostrarNombreAnnoComponent } from './nombre-anno/mostrar-nombre-anno/mostrar-nombre-anno.component';
import { MostrarProvinciaComponent } from './provincia/mostrar-provincia/mostrar-provincia.component';
import { MostrarRolComponent } from './rol/mostrar-rol/mostrar-rol.component';
import { MostrarValorEvaluacionComponent } from './valor-evaluacion/mostrar-valor-evaluacion/mostrar-valor-evaluacion.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListarAsignaturaComponent,
    AdicionarAsignaturaComponent,
    EditarAsignaturaComponent,
    ListarEstadoComponent,
    AdicionarEstadoComponent,
    EditarEstadoComponent,
    AutenticarComponent,
    ListarRolComponent,
    AdicionarRolComponent,
    EditarRolComponent,
    ListarUsuarioComponent,
    EditarUsuarioComponent,
    AdicionarUsuarioComponent,
    ListarFacultadComponent,
    EditarFacultadComponent,
    AdicionarFacultadComponent,
    ListarNivelEnsennanzaComponent,
    EditarNivelEnsennanzaComponent,
    AdicionarNivelEnsennanzaComponent,
    ListarMilitanciaComponent,
    EditarMilitanciaComponent,
    AdicionarMilitanciaComponent,
    ListarNombreAnnoComponent,
    EditarNombreAnnoComponent,
    AdicionarNombreAnnoComponent,
    ListarObservacionComponent,
    EditarObservacionComponent,
    AdicionarObservacionComponent,
    ListarProvinciaComponent,
    EditarProvinciaComponent,
    AdicionarProvinciaComponent,
    ListarValorEvaluacionComponent,
    EditarValorEvaluacionComponent,
    AdicionarValorEvaluacionComponent,
    ListarActivoAlumnoComponent,
    EditarActivoAlumnoComponent,
    AdicionarActivoAlumnoComponent,
    ListarMunicipioComponent,
    AdicionarMunicipioComponent,
    EditarMunicipioComponent,
    ListarGrupoDocenteComponent,
    EditarGrupoDocenteComponent,
    AdicionarGrupoDocenteComponent,
    ListarEscuelaComponent,
    EditarEscuelaComponent,
    AdicionarEscuelaComponent,
    ListarEstudianteComponent,
    EditarEstudianteComponent,
    AdicionarEstudianteComponent,
    EditarEvaluacionComponent,
    AdicionarEvaluacionComponent,
    ListarGradoEscolarComponent,
    EditarGradoEscolarComponent,
    AdicionarGradoEscolarComponent,
    ListarGrupoClaseComponent,
    EditarGrupoClaseComponent,
    AdicionarGrupoClaseComponent,
    ListarProfesorComponent,
    EditarProfesorComponent,
    AdicionarProfesorComponent,
    ListarReportesComponent,
    ListarReunionOrdinariaComponent,
    EditarReunionOrdinariaComponent,
    AdicionarReunionOrdinariaComponent,
    ListarVisitaEscuelaComponent,
    EditarVisitaEscuelaComponent,
    AdicionarVisitaEscuelaComponent,
    MostrarReportesComponent,
    MostrarActivoAlumnoComponent,
    MostrarEscuelaComponent,
    MostrarEstudianteComponent,
    MostrarObservacionComponent,
    AdicionarRespuestaobservacionComponent,
    MostrarProfesorComponent,
    MostrarUsuarioComponent,
    EditarRespuestaobservacionComponent,
    MostrarVisitaEscuelaComponent,
    MostrarReunionOrdinariaComponent,
    MostrarAsignaturaComponent,
    MostrarEstadoComponent,
    MostrarFacultadComponent,
    MostrarGradoEscolarComponent,
    MostrarGrupoClaseComponent,
    MostrarGrupoDocenteComponent,
    MostrarMilitanciaComponent,
    MostrarMunicipioComponent,
    MostrarNivelEnsennanzaComponent,
    MostrarNombreAnnoComponent,
    MostrarProvinciaComponent,
    MostrarRolComponent,
    MostrarValorEvaluacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  // if (!window.localStorage.getItem('token')) {
  //   this.router.navigate(['login']);
  //   return;
  // }
}
