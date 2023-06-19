import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CoreModule } from 'src/app/core/core.module';
import { RegisterPatientsComponent } from './register-patients.component';

const routes: Routes = [{ path: '', component: RegisterPatientsComponent }];

@NgModule({
  declarations: [RegisterPatientsComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    NgxMaskDirective,
    NgxMaskPipe,
    RouterModule.forChild(routes),
  ],
  exports: [RegisterPatientsComponent, RouterModule],
  providers: [provideNgxMask()],
})
export class RegisterPatientsModule {}
