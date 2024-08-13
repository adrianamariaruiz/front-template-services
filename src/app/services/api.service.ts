import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments.development';
import { DataTemplate } from '../model/DataTemplate.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly _http = inject(HttpClient);

  getAllTemplates(): Observable<DataTemplate[]>{
    return this._http.get<DataTemplate[]>(`${environment.apiUrlBase}/plantillas`)
  }

  getTemplateById(id: String): Observable<DataTemplate>{
    return this._http.get<DataTemplate>(`${environment.apiUrlBase}/plantilla/${id}`)
  }

  saveTemplate(templateData: DataTemplate): Observable<string>{
    return this._http.post(`${environment.apiUrlBase}/plantilla/save`, templateData, { responseType: 'text' })
  }
}
