import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide: boolean = true;

  constructor() {}

  ngOnInit() {}

  getErrorMessage() {
    if (this.email.hasError('Obrigatório')) {
      return 'Você deve inserir um valor';
    }

    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }
}
