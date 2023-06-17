import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { NutritionComponent } from './nutrition.component';

const routes: Routes = [{ path: '', component: NutritionComponent }];

@NgModule({
  declarations: [NutritionComponent],
  imports: [CommonModule,CoreModule, RouterModule.forChild(routes)],
  exports: [NutritionComponent, RouterModule],
})
export class NutritionModule {}
