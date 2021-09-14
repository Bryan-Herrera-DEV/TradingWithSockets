import { CustomSocketService } from './../custom-socket.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart-section',
  templateUrl: './chart-section.component.html',
  styleUrls: ['./chart-section.component.scss']
})
export class ChartSectionComponent implements OnInit {

  multi: any[];

  // options
  legend: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme: any | Color = {
    domain: ['#72efdd', '#ffd60a']
  };
  color = {
    color: {
      domain: '#72efdd'
    }
  }

  constructor(private customSocket: CustomSocketService) {
    this.multi =

      [
        {
          "name": "BTC",
          "series": [

          ]
        },
        {
          "name": "ETH",
          "series": [

          ]
        }
      ]

    // Object.assign(this, { multi });
  }
  ngOnInit(): void {

    this.customSocket.getPrices$().subscribe(({ data }) => {

      /** //TODO Capturamos los datos de servidor **/

      const [BTC, ETH] = data;

      /** //TODO: Aqui convertimos a un objecto fecha para poder activar el timeline! **/

      const pricesBTC = this.parseDate(BTC.prices);

      const pricesETH = this.parseDate(ETH.prices);

      /** //TODO Revisamos la data actual del grafico antes de actualizar **/

      const [currentBTC, currentETH] = this.multi; //TODO [0, 1]

      this.multi[0].series = currentBTC.series.concat(pricesBTC)

      this.multi[1].series = currentETH.series.concat(pricesETH)

      /** //TODO: Actualizamos grafica :) **/

      this.multi = [...this.multi]

    })

  }

  parseDate(dataRaw: Array<any>): Array<any> {
    const result = dataRaw.map(([name, value], index) => { // TODO: 1919199119
      return {
        name: moment(name, 'x').toDate(),
        value
      }
    });

    return result
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
