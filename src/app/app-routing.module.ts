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
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
