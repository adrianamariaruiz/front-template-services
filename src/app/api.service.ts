import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly _http = inject(HttpClient);

  getAllTemplates(): Observable<any>{
    return this._http.get(`${environment.apiUrlBase}/plantillas`)
  }

  getTemplateById(id: String): Observable<any>{
    return this._http.get(`${environment.apiUrlBase}/plantilla/${id}`)
  }
}
