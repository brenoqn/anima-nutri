import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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

  goToRegister(): void {
    this.router.navigateByUrl('/register');
  }
}
