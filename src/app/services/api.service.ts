import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, scheduled, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PathHelper } from '../helpers/path-helper';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  serverUrl?: string = undefined;

  setServerUrl(url: string): Observable<boolean> {
    return this.http
      .get<boolean>(PathHelper.joinParams(url, 'checkApi'))
      .pipe(map(data => {
        if (data) {
          this.serverUrl = url;
        }
        return data;
      }),
        catchError(error => from([false]))
      );
  }

  get<T>(path: string): Observable<T> {
    if (this.serverUrl) {
      return this.http.get<T>(PathHelper.joinParams(this.serverUrl, path));
    } else {
      return throwError(ApiServiceErrorCodes.noServer);
    }
  }

  constructor(private http: HttpClient) { }
}

export const ApiServiceErrorCodes = {
  noServer: 'Unspecified server URL'
};
