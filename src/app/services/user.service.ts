import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private mockDatabase: { email: string; password: string }[] = [
    { email: 'brenoqn01@gmail.com', password: 'Teste@123' },
    { email: 'hugo161299@gmail.com', password: 'Teste@123' },
  ];

  constructor() {}

  register(email: string, password: string): void {
    this.mockDatabase.push({ email, password });
  }

  getUsers(): { email: string; password: string }[] {
    return this.mockDatabase;
  }
}
