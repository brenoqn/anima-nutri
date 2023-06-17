import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToPatients() {
    this.router.navigate(['about-us']);
  }

  goToFood() {
    this.router.navigate(['login']);
  }

  goToProfile(): void {
    this.router.navigateByUrl('/home');
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

}
