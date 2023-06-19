import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getIdPacient(id: any) {
    return this.http.get<any>(`${environment.BaseURL}/paciente/${id}`);
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

  getFoodPlan(id: any) {
    return this.http.get<any>(`${environment.BaseURL}/plano-alimentar/${id}`);
  }

  updateFoodPlan(id: any, data: any) {
    return this.http.put<any>(`${environment.BaseURL}/plano-alimentar/${id}`, data);
  }
}
