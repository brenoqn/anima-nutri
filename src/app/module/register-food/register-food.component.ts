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
  selector: 'app-register-food',
  templateUrl: './register-food.component.html',
  styleUrls: ['./register-food.component.scss'],
})
export class RegisterFoodComponent {
  form!: FormGroup;
  hide: boolean = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: HttpClientService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      porcao: ['', Validators.required],
      calorias: ['', Validators.required],
      medidaCaseira: ['', Validators.required],
      unidade: ['', Validators.required],
    });
  }

  goToRegisterFoods(): void {
    if (this.form.valid) {
      this.apiService.postNewFood(this.form.value).subscribe({
        next: (res) => {
          this.router.navigateByUrl('/foods');
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  goToFoods(): void {
    this.router.navigateByUrl('/foods');
  }
}
