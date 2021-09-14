import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ListSectionComponent } from './list-section/list-section.component';
import { ChartSectionComponent } from './chart-section/chart-section.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    ListSectionComponent,
    ChartSectionComponent
  ],
  imports: [
    NgxChartsModule,
    BrowserAnimationsModule,
    BrowserModule,
    PerfectScrollbarModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
