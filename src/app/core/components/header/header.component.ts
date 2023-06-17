import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  isNutritionPage(): boolean {
    return this.activatedRoute.snapshot.url.some(
      (segment: UrlSegment) => segment.path === 'nutrition'
    );
  }

  goToNewPage() {
    // Implemente a lógica para ir para uma nova página
  }

  goToAnotherPage() {
    // Implemente a lógica para ir para outra página
  }

  goToAboutUs() {
    this.router.navigate(['about-us']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  navigateToRegister(): void {
    this.router.navigateByUrl('/register');
  }
}
