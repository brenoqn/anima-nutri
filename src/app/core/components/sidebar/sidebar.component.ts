import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  pacient: any;

  constructor(
    private router: Router,
    private apiService: HttpClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const patientId = this.route.snapshot.paramMap.get('patientId');
    this.apiService.getIdPacient(patientId).subscribe({
      next: (res) => {
        this.pacient = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  goToAnamnesis(): void {
    this.router.navigateByUrl('/anamnesis');
  }

  goToAnthropometry(): void {
    this.router.navigateByUrl('/anthropometry');
  }

  goToNutrition(): void {
    this.router.navigateByUrl('/nutrition');
  }
}
