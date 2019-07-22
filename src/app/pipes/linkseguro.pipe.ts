import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'linkseguro'
})
export class LinkseguroPipe implements PipeTransform {

  constructor(private domSanitazer:DomSanitizer){
  }

  transform(value: string): any {
    return this.domSanitazer.bypassSecurityTrustResourceUrl(`https://open.spotify.com/embed/track/${value}`);
  }

}
