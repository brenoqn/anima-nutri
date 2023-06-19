import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-food-plan',
  templateUrl: './food-plan.component.html',
  styleUrls: ['./food-plan.component.scss'],
})
export class FoodPlanComponent {
  value!: string;
  foodPlan: any = { descricao: '' };
  pacient: any;

  constructor(
    private apiService: HttpClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const patientId = this.route.snapshot.paramMap.get('patientId');
    this.apiService.getFoodPlan(patientId).subscribe({
      next: (res) => {
        this.foodPlan = res;
      },
      error: (err) => {
        console.error(err);
      },
    });

    this.apiService.getIdPacient(patientId).subscribe({
      next: (res) => {
        this.pacient = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  saveChanges() {
    const patientId = this.route.snapshot.paramMap.get('patientId');
    this.apiService.updateFoodPlan(patientId, this.foodPlan).subscribe({
      next: (res) => {
        this.foodPlan = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
