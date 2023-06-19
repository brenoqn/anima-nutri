import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [{ path: '', component: ProfileComponent }];

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, CoreModule, ButtonModule, RouterModule.forChild(routes)],
  exports: [ProfileComponent, RouterModule],
})
export class ProfileModule {}
