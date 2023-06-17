import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeIcons } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AboutUsModule } from './module/about-us/about-us.module';
import { HomeModule } from './module/home/home.module';
import { LoginModule } from './module/login/login.module';
import { NutritionModule } from './module/nutrition/nutrition.module';
import { RegisterModule } from './module/register/register.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,

    HomeModule,
    NutritionModule,
    AboutUsModule,
    RegisterModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent, PrimeIcons],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
