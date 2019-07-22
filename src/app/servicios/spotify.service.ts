import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
  token = "";

  constructor(private http: HttpClient) { }

  armarPeticion(peticion) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(`https://api.spotify.com/v1/${peticion}`, { headers });
  }

  obtenerToken() {
    return this.http.get('https://spotify-get-token.herokuapp.com/spotify/d6b55734aa3f4b49af89ae8023b6c69e/4659ca881ead4eed81c45197f071db34');
  }

  guardarToken(token){
    this.token = token;
  }

  obtenerLanzamientos() {
    return this.armarPeticion('browse/new-releases?country=CO&limit=40&offset=0')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  obtenerArtista(artista: string) {
    return this.armarPeticion(`search?q=${artista}&type=artist&limit=20&offset=0`)
      .pipe(map(data => {
        return data['artists'].items;
      }));
  }

  verArtista(id: string) {
    return this.armarPeticion(`artists/${id}`);
  }

  obtenerCanciones(id: string) {
    return this.armarPeticion(`artists/${id}/top-tracks?country=co`)
      .pipe(map(data => {
        return data['tracks'];
      }));
  }
}

// peticion para solicitar token
//https://spotify-get-token.herokuapp.com/spotify/d6b55734aa3f4b49af89ae8023b6c69e/4659ca881ead4eed81c45197f071db34