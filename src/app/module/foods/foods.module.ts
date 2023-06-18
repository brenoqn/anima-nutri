import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CoreModule } from 'src/app/core/core.module';
import { FoodsComponent } from './foods.component';

const routes: Routes = [{ path: '', component: FoodsComponent }];

@NgModule({
  declarations: [FoodsComponent],
  imports: [
    CommonModule,
    CoreModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [FoodsComponent, RouterModule],
})
export class FoodsModule {}
