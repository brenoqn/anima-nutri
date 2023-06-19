import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./module/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./module/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./module/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./module/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'nutrition',
    loadChildren: () =>
      import('./module/nutrition/nutrition.module').then(
        (m) => m.NutritionModule
      ),
  },
  {
    path: 'anamnesis',
    loadChildren: () =>
      import('./module/anamnesis/anamnesis.module').then(
        (m) => m.AnamnesisModule
      ),
  },
  {
    path: 'anthropometry',
    loadChildren: () =>
      import('./module/anthropometry/anthropometry.module').then(
        (m) => m.AnthropometryModule
      ),
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./module/patients/patients.module').then(
        (m) => m.PatientsModule
      ),
  },
  {
    path: 'foods',
    loadChildren: () =>
      import('./module/foods/foods.module').then(
        (m) => m.FoodsModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./module/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'register-patient',
    loadChildren: () =>
      import('./module/register-patients/register-patients.module').then(
        (m) => m.RegisterPatientsModule
      ),
  },
  {
    path: 'register-food',
    loadChildren: () =>
      import('./module//register-food/register-food.module').then(
        (m) => m.RegisterFoodModule
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
