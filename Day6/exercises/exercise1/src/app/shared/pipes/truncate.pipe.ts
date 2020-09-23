import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'truncate'
})
@Injectable({
  providedIn: 'root'
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, n: number = 0): string {
    return !n || text.length < n ? text : text.substring(0, n) + '...';
  }
}
