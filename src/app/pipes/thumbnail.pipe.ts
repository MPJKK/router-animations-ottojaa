import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(filename: string, size?: string): any {

    let thumb = 320;

    if (size === 'small') {
      thumb = 160;
    }
    if (size === 'medium') {
      thumb = 320;
    }
    if (size === 'large') {
      thumb = 640;
    }

    const temp = filename.split('.');
    const newFilename = temp[0] + '-tn' + thumb + '.png';
    return newFilename;
  }

}
