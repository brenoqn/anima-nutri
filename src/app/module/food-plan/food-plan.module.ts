import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CoreModule } from 'src/app/core/core.module';
import { FoodPlanComponent } from './food-plan.component';

const routes: Routes = [{ path: '', component: FoodPlanComponent }];

@NgModule({
  declarations: [FoodPlanComponent],
  imports: [
    CommonModule,
    CoreModule,
    InputTextareaModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [FoodPlanComponent, RouterModule],
})
export class FoodPlanModule {}
