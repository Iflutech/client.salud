export class CommonUtil {
  static formatDateToService(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  static getOrdinalDay(n: number): string {
    const suffixes: Record<number, string> = {
      1: 'er',
      2: 'do',
      3: 'er',
      4: 'to',
      5: 'to',
      6: 'to',
      7: 'mo',
      8: 'vo',
      9: 'no',
      10: 'mo',
      11: 'vo',
      12: 'vo',
      13: 'vo',
      14: 'vo',
      15: 'vo',
      16: 'vo',
      17: 'mo',
      18: 'vo',
      19: 'no'
    };
  
    const suffix = suffixes[n] ?? '°';
    return `${n}${suffix} día`;
  }
}
