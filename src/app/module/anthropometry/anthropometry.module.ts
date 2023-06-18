import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CoreModule } from 'src/app/core/core.module';
import { AnthropometryComponent } from './anthropometry.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [{ path: '', component: AnthropometryComponent }];

@NgModule({
  declarations: [AnthropometryComponent],
  imports: [
    CommonModule,
    CoreModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [AnthropometryComponent, RouterModule],
  providers: [],
})
export class AnthropometryModule {}
