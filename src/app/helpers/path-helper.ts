export class PathHelper {
  static joinParams(...params: string[]): string {
    return params.join('/');
  }
}
