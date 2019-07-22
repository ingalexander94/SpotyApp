import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//RUTAS
import { APP_ENRUTADOR } from './app.routes';

//SERVICIOS
import { SpotifyService } from './servicios/spotify.service';

//PIPES
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { FiltroComponent } from './componentes/filtro/filtro.component';
import { BarraNavegacionComponent } from './componentes/partes/barra-navegacion/barra-navegacion.component';
import { TarjetaComponent } from './componentes/partes/tarjeta/tarjeta.component';
import { LinkseguroPipe } from './pipes/linkseguro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ArtistaComponent,
    FiltroComponent,
    BarraNavegacionComponent,
    TarjetaComponent,
    DomseguroPipe,
    LinkseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ENRUTADOR
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
