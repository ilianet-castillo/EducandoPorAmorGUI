import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {
  }

  autenticarse(loginPayload) {
    return this.httpClient.post(this.baseUrl + 'token/generate-token', loginPayload);
  }

  enviarPeticionGet(url: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url);
  }

  enviarPeticionGetPorId(url: string, id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + url + id);
  }

  enviarPeticionPost(url: string, objeto: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, objeto);
  }

  enviarPeticionPut(url: string, objeto: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + url + objeto.id, objeto);
  }

  enviarPeticionDelete(url: string, id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + url + id);
  }

  enviarPeticionReporte(url: string, report: string, id: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url + report + id);
  }

}
