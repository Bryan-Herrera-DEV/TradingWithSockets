import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tradingApp';
  menu: Array<any> = []
  options: Array<any> = []

  constructor() {

  }

  ngOnInit(): void {
    this.menu = [
      { name: 'Comprar cripto' },
      { name: 'Mercados' },
      { name: 'Trading' },
      { name: 'Derivados' },
    ]

    this.options = [
      { name: 'Billetera' },
      { name: 'EUR' }
    ]
  }
}
