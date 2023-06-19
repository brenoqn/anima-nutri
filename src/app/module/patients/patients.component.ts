import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent {
  patients: any[] = [];

  constructor(private apiService: HttpClientService, private router: Router) {}

  ngOnInit() {
    this.apiService.getAllPacientes().subscribe({
      next: (res) => {
        this.patients = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  goToRegisterPatient() {
    this.router.navigateByUrl('/register-patient');
  }

  goToPatient(patientId: string) {
    this.router.navigateByUrl(`/food-plan/${patientId}`);
  }
}
