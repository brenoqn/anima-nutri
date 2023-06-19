import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-food',
  templateUrl: './register-food.component.html',
  styleUrls: ['./register-food.component.scss'],
})
export class RegisterFoodComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide: boolean = true;

  constructor(private router: Router) {}

  getErrorMessage() {
    if (this.email.hasError('Obrigatório')) {
      return 'Você deve inserir um valor';
    }

    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }

  goToFoods(): void {
    this.router.navigateByUrl('/foods');
  }
}
