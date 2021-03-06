import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlBusqueda: string = 'https://api.spotify.com/v1/search';

  constructor( private http: Http) { }

  getArtistas( termino: string) {
    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    // Observable this.http.get(url)
    // Usamos la librería rxjs para volverlo en un objeto con su funcion map
    return this.http.get( url )
                    .map( res => {
                      console.log(res);
                    }); //
  }

}
