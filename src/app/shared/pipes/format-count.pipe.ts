import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCount',
  standalone: true
})
export class FormatCountPipe implements PipeTransform {

  transform(value: any): string {
    if (value == null) return '0';

    const abs = Math.abs(value);

    if (abs >= 1_000_000_000_000) return (value / 1_000_000_000_000).toFixed(1).replace(/\.0$/, '') + 'T';
    if (abs >= 1_000_000_000) return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    if (abs >= 1_000_000) return (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (abs >= 1_000) return (value / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';

    return value.toString();
  }

}
