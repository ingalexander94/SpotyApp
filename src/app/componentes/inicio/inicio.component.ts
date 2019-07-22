import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent {

  lanzamientos: any[] = [];
  cargando = true;

  constructor(private spotify: SpotifyService) {
    this.spotify.obtenerLanzamientos()
      .subscribe((data: any) => {
        this.lanzamientos = data;
        this.cargando = false;
      }, (error: any) => {
        this.spotify.obtenerToken().subscribe((data:any)=>{
          console.log(error.error);
          this.spotify.guardarToken(data.access_token);
          this.pedirLanzamientos();
        });
      });
  }

  pedirLanzamientos() {
    return this.spotify.obtenerLanzamientos()
      .subscribe((data: any) => {
        this.lanzamientos = data;
        this.cargando = false;
      });
  }

}
