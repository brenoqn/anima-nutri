import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ButtonModule],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToAboutUs() {
    this.router.navigate(['about-us']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
