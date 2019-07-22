import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styles: []
})
export class FiltroComponent {

  constructor(private spotifyService: SpotifyService) { }

  artistas: any[] = [];
  cargando = false;

  buscarArtista(artista: string) {
    if (artista === "") {
      this.cargando = false;
      this.artistas = [];
    } else {
      this.cargando = true;
      this.spotifyService.obtenerArtista(artista)
        .subscribe((data: any) => {
          this.artistas = data;
          this.cargando = false;
        });
    }
  }
}
