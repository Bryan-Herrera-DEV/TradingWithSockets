import { Component, OnInit, Input } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CustomSocketService } from '../custom-socket.service';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.scss']
})
export class ListSectionComponent implements OnInit {
  amounts: Array<any> = []
  @Input() coin: string | undefined;
  public config: PerfectScrollbarConfigInterface = {};
  constructor(private customSocket: CustomSocketService) { }

  ngOnInit(): void {
    this.customSocket.getPrices$().subscribe(({ data }) => {
      const [BTC, ETH] = data;
      this.amounts = this.coin === 'BTC' ? BTC.prices.reverse() : ETH.prices.reverse();
      console.log(data);

    })
    // this.amounts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  }

}
