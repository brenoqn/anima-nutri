import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { NutritionComponent } from './nutrition.component';

const routes: Routes = [{ path: '', component: NutritionComponent }];

@NgModule({
  declarations: [NutritionComponent],
  imports: [
    CommonModule,

    HeaderComponent,
    FooterComponent,
    RouterModule.forChild(routes),
  ],
  exports: [NutritionComponent, RouterModule],
})
export class NutritionModule {}
