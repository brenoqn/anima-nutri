import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { LoginComponent } from './login.component';

const routes: Routes = [{ path: '', component: LoginComponent }];
@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent, RouterModule],
})
export class LoginModule {}
