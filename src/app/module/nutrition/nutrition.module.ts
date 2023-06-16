import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { SidenavComponent } from 'src/app/core/components/sidenav/sidenav.component';
import { NutritionComponent } from './nutrition.component';

const routes: Routes = [{ path: '', component: NutritionComponent }];

@NgModule({
  declarations: [NutritionComponent],
  imports: [
    CommonModule,

    HeaderComponent,
    SidenavComponent,
    RouterModule.forChild(routes),
  ],
  exports: [NutritionComponent, RouterModule],
})
export class NutritionModule {}
