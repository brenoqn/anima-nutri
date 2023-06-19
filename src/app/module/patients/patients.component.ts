import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent {
  patients: any[] = [];

  constructor(private apiService: HttpClientService, private router: Router) {}

  ngOnInit() {
    this.apiService.getAllPacientes().subscribe(
      (res) => {
        this.patients = res;
        console.log('this.patients', this.patients);
      },
      (err) => console.error(err)
    );
  }

  goToRegisterPatient(){
    this.router.navigateByUrl('/register-patient');
  }

  goToPatient(){
    this.router.navigateByUrl('/food-plan')
  }
}
