import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService { 

    constructor(private httpClient: HttpClient) { }

    public post(endPointUrl: string, data?: any, ): Observable<any> {
      return this.httpClient
        .post(endPointUrl, data, this.httpOptions)
        .pipe(map((mapData: any) => mapData));
    }

    public get(endPointUrl: string, params?: any): Observable<any> {
      let httpOptions = {
        ...this.httpOptions,
      };
  
      if (params) {
        httpOptions = { ...httpOptions, params };
      }
  
      return this.httpClient.get(endPointUrl, httpOptions).pipe(map((mapData: any) => mapData));
    }

    public get httpOptions(): any {
      return {
        reportProgress: true,
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      };
    }

}