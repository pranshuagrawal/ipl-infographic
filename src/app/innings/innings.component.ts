import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-innings',
  templateUrl: './innings.component.html',
  styleUrls: ['./innings.component.scss']
})
export class InningsComponent implements OnInit {
  chartOptions: Object;
  chart: Object;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get("./assets/data/win_by_innings.json")
      .subscribe(
        res => {
          const data = [{
                          name: 'Batting First Wins',
                          y: res["first_innings"],
                          sliced: true
                        }, {
                          name: 'Chasing Wins',
                          y: res["second_innings"]
                        }];

          this.chart["series"][0].setData(data);
        }
      )
    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      plotOptions: {
        pie: {
          borderWidth: 2,
          colors: [{"radialGradient":{"cx":0.5,"cy":0.3,"r":0.7},"stops":[[0,"#339598"],[1,"#34b9bb"]]},{"radialGradient":{"cx":0.5,"cy":0.3,"r":0.7},"stops":[[0,"#ecab50"],[1,"#ffc166"]]}],
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      legend:{
        itemStyle:{
          color: 'rgba(255,255,255,.8)'
        }
      },
      title: {
        text: null
      },
      series: [{
        name: 'Wins',
        colorByPoint: true
      }]
    };

  }

  saveInstance(chartInstance): void {
    this.chart = chartInstance;
  }


}
