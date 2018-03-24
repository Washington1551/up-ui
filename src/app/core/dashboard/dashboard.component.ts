import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contas = [
    {usuario: 'user1'},
    {usuario: 'user2'},
    {usuario: 'user4'},
    {usuario: 'userN'}
  ]

  qtdeSeguidores: any;

  constructor() {

    this.qtdeSeguidores = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Quantidade de novos seguidores',
          data: [10, 30, 80, 81, 90, 100, 215],
          fill: false,
          borderColor: '#4FC3F7'
        }
      ]
    }
  }

  ngOnInit() {
  }

}
