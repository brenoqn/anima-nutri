import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [HeaderComponent, SidenavComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, SidenavComponent, FooterComponent, SidebarComponent],
})
export class CoreModule {}
