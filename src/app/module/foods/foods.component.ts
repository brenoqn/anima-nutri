import { Component } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent {
  foods: any[] = [];

  constructor(private apiService: HttpClientService) {}

  ngOnInit() {
  }
}
