import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { HttpClientService } from 'src/app/services/http-client.service';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HttpClientModule,
    ButtonModule,
    HeaderComponent,
    FooterComponent,
    RouterModule.forChild(routes),
  ],
  exports: [HomeComponent, RouterModule],
  providers: [HttpClientService],
})
export class HomeModule {}
