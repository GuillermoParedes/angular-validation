import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environments } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public baseUrl: string = environments.baseUrl;

  public headers = new HttpHeaders({ authorId: environments.authorId });

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(`${ this.baseUrl }${ url }`, { headers: this.headers, params });
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.httpClient.post<T>(`${ this.baseUrl }${ url }`, data, { headers: this.headers });
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.httpClient.put<T>(`${ this.baseUrl }${ url }`, data, { headers: this.headers });
  }

  delete<T>(url: string, params?: HttpParams): Observable<T> {
    return this.httpClient.delete<T>(`${ this.baseUrl }${ url }`, { headers: this.headers, params });
  }

}