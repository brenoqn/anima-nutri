import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: HttpClientService){}

  ngOnInit() {
    this.apiService.getAllEvents().subscribe((teste: any) => console.log('teste', teste))
  }
}
