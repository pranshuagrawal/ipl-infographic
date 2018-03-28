import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopStatsComponent } from './top-stats/top-stats.component';
import {ChartModule} from 'angular2-highcharts';
import {HttpClientModule} from '@angular/common/http';
import { IndividualStatsComponent } from './top-stats/individual-stats/individual-stats.component';
import { OversComponent } from './overs/overs.component';
import { InningsComponent } from './innings/innings.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { IndividualTeamStatsComponent } from './team-stats/individual-team-stats/individual-team-stats.component';

declare var require: any

const HighCharts = require('highcharts');
HighCharts.setOptions({
  chart: {
    backgroundColor: 'transparent'
  },
  credits:{
    enabled: false
  },
  global: {
    chart: {
      backgroundColor: 'transparent'
    }
  }
});

export function highchartsFactory() {
  const hc = HighCharts;
  const dd = require('highcharts/modules/drilldown');
  dd(hc);

  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopStatsComponent,
    IndividualStatsComponent,
    OversComponent,
    InningsComponent,
    TeamStatsComponent,
    IndividualTeamStatsComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    ChartModule,
    ServiceWorkerModule.register('/ngsw-worker.js')
  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

//    ServiceWorkerModule.register('/ngsw-worker.js')
