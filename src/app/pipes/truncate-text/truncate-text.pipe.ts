import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    if (!value) return '';
    return value.length <= maxLength ? value : value.substring(0, maxLength) + '...';
  }
}
