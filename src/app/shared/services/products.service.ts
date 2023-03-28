import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private endpoint: string = `${environment.baseUrl}`;;

  constructor(private api: ApiService) { }

  public addProduct(body: any): Observable<any> {
    return this.api.post(`${this.endpoint}/products`, body);
  }

  public getProducts(): Observable<any> {
    return this.api.get(`${this.endpoint}/products`);
  }

}
