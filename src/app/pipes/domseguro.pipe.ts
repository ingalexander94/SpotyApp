import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitazer:DomSanitizer){}

  transform(value: any): any {

    if(!value){
    return this.domSanitazer.bypassSecurityTrustStyle(`url(assets/img/error.jpg)`);
    }
  
    if(value.length>0){
    return this.domSanitazer.bypassSecurityTrustStyle(`url(${value[0].url})`);
    }else{
    return this.domSanitazer.bypassSecurityTrustStyle(`url(assets/img/error.jpg)`);
    }
  }

}
