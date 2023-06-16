import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide: boolean = true;

  private mockDatabase: { email: string; password: string }[] = [
    { email: 'brenoqn01@gmail.com', password: 'Teste@123' },
    { email: 'hugo161299@gmail.com', password: 'Teste@123' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  getErrorMessage() {
    if (this.email.hasError('Obrigatório')) {
      return 'Você deve inserir um valor';
    }

    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }

  navigateToRegister(): void {
    this.router.navigateByUrl('/register');
  }

  login(email: string | null, password: string | null): void {
    if (!email || !password) {
      alert('Insira um e-mail e uma senha');
      return;
    }

    const user = this.mockDatabase.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      this.router.navigateByUrl('/nutrition');
    } else {
      alert('E-mail ou senha está incorreto');
    }
  }
}
