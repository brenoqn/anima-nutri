import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private apiService: HttpClientService, private router: Router) {}

  ngOnInit() {
    this.apiService
      .getAllEvents()
      .subscribe((teste: any) => console.log('teste', teste));
  }

  navigateToRegister(): void {
    this.router.navigateByUrl('/register');
  }
}
