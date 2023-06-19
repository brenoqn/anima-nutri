import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  getAllEvents() {
    return this.http.get<any>(environment.BaseURL);
  }

  getAllPacientes() {
    return this.http.get<any>(`${environment.BaseURL}/paciente`);
  }

  postNewPacient(pacient: any) {
    return this.http.post<any>(`${environment.BaseURL}/paciente`, pacient);
  }

  getAllFoods() {
    return this.http.get<any>(`${environment.BaseURL}/Alimento`);
  }

  postNewFood(food: any) {
    return this.http.post<any>(`${environment.BaseURL}/Alimento`, food);
  }
}
