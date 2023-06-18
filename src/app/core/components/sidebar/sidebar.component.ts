import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToAnamnesis(): void {
    this.router.navigateByUrl('/anamnesis');
  }

  goToAnthropometry(): void {
    this.router.navigateByUrl('/anthropometry');
  }

  goToNutrition(): void {
    this.router.navigateByUrl('/nutrition');
  }
}
