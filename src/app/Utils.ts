import { UrlWithParsedQuery, parse } from 'url';

export class Utils {
  public static parseUrl(url: string): UrlWithParsedQuery {
    if (!url) throw new Error('Empty URL!');
    return parse(url, true);
  }

  // /* istanbul ignore next */ //.Ignorálja a kövi funkciót, v osztályt a lefedettségi mérőből
  public static toUpperCase(arg: string): string {
    return arg.toUpperCase();
  }
}
