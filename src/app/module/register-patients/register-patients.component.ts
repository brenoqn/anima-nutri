import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-patients',
  templateUrl: './register-patients.component.html',
  styleUrls: ['./register-patients.component.scss']
})
export class RegisterPatientsComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide: boolean = true;

  constructor(private router: Router) {}


  getErrorMessage() {
    if (this.email.hasError('Obrigatório')) {
      return 'Você deve inserir um valor';
    }

    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }

  goToPatients(): void {
    this.router.navigateByUrl('/patients');
  }
}
