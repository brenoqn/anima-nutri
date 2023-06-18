import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CoreModule } from 'src/app/core/core.module';
import { AnamnesisComponent } from './anamnesis.component';

const routes: Routes = [{ path: '', component: AnamnesisComponent }];

@NgModule({
  declarations: [AnamnesisComponent],
  imports: [
    CommonModule,
    CoreModule,
    InputTextareaModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [AnamnesisComponent, RouterModule],
})
export class AnamnesisModule {}
