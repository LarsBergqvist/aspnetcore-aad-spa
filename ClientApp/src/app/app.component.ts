import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserInfo {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ClientApp';
  name = '';

  constructor(private readonly httpClient: HttpClient) {}

  async ngOnInit(): Promise<any> {
    const res = await this.httpClient
      .get<UserInfo>('https://localhost:5001/whoami')
      .toPromise();

    this.name = res.name;
  }
}
