import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide: boolean = true;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  getErrorMessage() {
    if (this.email.hasError('Obrigatório')) {
      return 'Você deve inserir um valor';
    }

    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }

  navigateToLogin(): void {
    this.router.navigateByUrl('/login');
  }

  register(email: string, password: string): void {
    this.userService.register(email, password);
    this.router.navigateByUrl('/login');
  }
}
