import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientService } from 'src/app/services/http-client.service';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HttpClientModule,
    CoreModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [HomeComponent, RouterModule],
  providers: [HttpClientService],
})
export class HomeModule {}
