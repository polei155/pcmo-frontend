import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { ApiService } from './api.service';

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private endpoint: string = `${environment.baseUrl}`;;

  constructor(private api: ApiService) { }

  public register(data: User): Observable<any> {
    return this.api.post(`${this.endpoint}/users/register`, data);
  }

  public login(data: any): Observable<any> {
    return this.api.post(`${this.endpoint}/users/login`, data)
  }
  
}
