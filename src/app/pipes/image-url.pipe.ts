import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageURL',
  standalone: true
})
export class ImageURLPipe implements PipeTransform {

  transform(url:any, ...args: unknown[]): unknown {
    if(!url){
      url = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
    }
    return url;

  }

}
