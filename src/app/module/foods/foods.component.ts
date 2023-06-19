import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
})
export class FoodsComponent {
  foods: any[] = [];

  constructor(private apiService: HttpClientService, private router: Router) {}

  ngOnInit() {}

  goToRegisterFood() {
    this.router.navigateByUrl('/register-food');
  }
}
