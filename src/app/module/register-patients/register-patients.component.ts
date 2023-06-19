import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-register-patients',
  templateUrl: './register-patients.component.html',
  styleUrls: ['./register-patients.component.scss'],
})
export class RegisterPatientsComponent {
  form!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide: boolean = true;

  constructor(
    private router: Router,
    private apiService: HttpClientService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sexo: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  goToRegisterPatients(): void {
    if (this.form.valid) {
      this.apiService.postNewPacient(this.form.value).subscribe({
        next: (res) => {
          this.router.navigateByUrl('/patients');
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  goToPatients(): void {
    this.router.navigateByUrl('/patients');
  }

  getErrorMessage() {
    if (this.email.hasError('Obrigatório')) {
      return 'Você deve inserir um valor';
    }
    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }
}
