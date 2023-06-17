import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { AboutUsComponent } from './about-us.component';

const routes: Routes = [{ path: '', component: AboutUsComponent }];

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, CoreModule, RouterModule.forChild(routes)],
  exports: [AboutUsComponent, RouterModule],
})
export class AboutUsModule {}
