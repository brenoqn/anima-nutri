import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CoreModule } from 'src/app/core/core.module';
import { NutritionComponent } from './nutrition.component';

const routes: Routes = [{ path: '', component: NutritionComponent }];

@NgModule({
  declarations: [NutritionComponent],
  imports: [
    CommonModule,
    CoreModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [NutritionComponent, RouterModule],
})
export class NutritionModule {}
