import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServerConfig } from '../configs/server-config';
import { PathHelper } from '../helpers/path-helper';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  serverUrl?: string = undefined;

  setServerUrl(url: string): Observable<boolean> {
    return this.http
      .get<boolean>(PathHelper.joinParams(url, ServerConfig.endpoints.checkApi))
      .pipe(map(data => {
        if (data) {
          this.serverUrl = url;
        }
        return data;
      }),
        catchError(error => from([false]))
      );
  }

  public delete(path: string): Observable<any> {
    if (this.serverUrl) {
      return this.http.delete(PathHelper.joinParams(this.serverUrl, path));
    } else {
      return throwError(ApiServiceErrorCodes.noServer);
    }
  }
  public update(path: string, data: any): Observable<any> {
    if (this.serverUrl) {
      return this.http.put(PathHelper.joinParams(this.serverUrl, path), data);
    } else {
      return throwError(ApiServiceErrorCodes.noServer);
    }
  }

  public get<T>(path: string): Observable<T> {
    if (this.serverUrl) {
      return this.http.get<T>(PathHelper.joinParams(this.serverUrl, path), );
    } else {
      return throwError(ApiServiceErrorCodes.noServer);
    }
  }

  constructor(private http: HttpClient) { }
}

export const ApiServiceErrorCodes = {
  noServer: 'Unspecified server URL'
};
