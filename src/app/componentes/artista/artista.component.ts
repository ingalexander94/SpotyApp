import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista:any = {};
  canciones:any[] = [];
  cargando = true;

  constructor(private activarEnrutador: ActivatedRoute,private servicioSpotify:SpotifyService) { 
    this.activarEnrutador.params.subscribe(parametros =>{
      this.verArtista(parametros['id']);
      this.obtenerCanciones(parametros['id']);
    });
  }

  verArtista(id:string){
    this.servicioSpotify.verArtista(id)
      .subscribe(data =>{
        this.artista = data;
        this.cargando = false;
      });
  }

  obtenerCanciones(id:string){
    this.servicioSpotify.obtenerCanciones(id)
      .subscribe(data =>{
        console.log(data);
        this.canciones = data;
      });
  }
}
