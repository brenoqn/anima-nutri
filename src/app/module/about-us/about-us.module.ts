import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { AboutUsComponent } from './about-us.component';

const routes: Routes = [{ path: '', component: AboutUsComponent }];

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterModule.forChild(routes),
  ],
  declarations: [AboutUsComponent],
  exports: [AboutUsComponent, RouterModule],
})
export class AboutUsModule {}
