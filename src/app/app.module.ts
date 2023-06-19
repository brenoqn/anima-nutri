import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeIcons } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AboutUsModule } from './module/about-us/about-us.module';
import { AnamnesisModule } from './module/anamnesis/anamnesis.module';
import { AnthropometryModule } from './module/anthropometry/anthropometry.module';
import { HomeModule } from './module/home/home.module';
import { LoginModule } from './module/login/login.module';
import { NutritionModule } from './module/nutrition/nutrition.module';
import { RegisterModule } from './module/register/register.module';
import { PatientsModule } from './module/patients/patients.module';
import { FoodsModule } from './module/foods/foods.module';
import { ProfileModule } from './module/profile/profile.module';
import { RegisterPatientsModule } from './module/register-patients/register-patients.module';
import { RegisterFoodModule } from './module/register-food/register-food.module';
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
    AnthropometryModule,
    AnamnesisModule,
    PatientsModule,
    FoodsModule,
    ProfileModule,
    RegisterPatientsModule,
    RegisterFoodModule
  ],
  providers: [],
  bootstrap: [AppComponent, PrimeIcons],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
