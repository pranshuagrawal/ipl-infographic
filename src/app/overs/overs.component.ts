import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-overs',
  templateUrl: './overs.component.html',
  styleUrls: ['./overs.component.scss']
})
export class OversComponent implements OnInit {

  chartOptions: Object;
  chart: Object;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    const dataUrls = ["boundary_overs.json", "fow_overs.json"];
    const allPromises = dataUrls.map( url => {
      return new Promise((resolve, reject) => {
        this.http.get("./assets/data/"+url)
          .subscribe(
            res => {
              resolve(res);
            }
          );
      });
    });

    Promise.all(allPromises)
      .then(
        responseAll => {

          const categories = Object.keys(responseAll[0]);
          const boundaries_series = Object.values(responseAll[0]);
          const fow_series = Object.values(responseAll[1]);

          this.chart["xAxis"][0].setCategories(categories, true, true);
          this.chart["series"][0].setData(boundaries_series);
          this.chart["series"][1].setData(fow_series);

        }
      )

    this.chartOptions = {
      chart: {
        zoomType: 'xy'
      },
      title: {
        text: null
      },

      xAxis: [{
        crosshair: true,
        lineWidth: 1,
        gridLineColor: 'rgba(255,255,255,.1)',
        gridLineWidth: 1,
        lineColor: 'rgba(255,255,255,.6)',
        labels:{
          style:{
            color: '#ffffff'
          }
        }
      }],
      yAxis: [{
        gridLineWidth: 1,
        allowDecimals: false,
        minorGridLineWidth: 0,
        gridLineColor: 'rgba(255,255,255,.1)',
        labels: {
          format: '{value}',
          style: {
            color: "#6dd9c6"
          }
        },
        title: {
          text: 'Boundaries',
          style: {
            color: "#6dd9c6"
          }
        }
      }, {
        gridLineWidth: 0,
        allowDecimals: false,
        minorGridLineWidth: 0,
        title: {
          text: 'Fall of Wickets',
          style: {
            color: "#f95b60"
          }
        },
        labels: {
          format: '{value}',
          style: {
            color: "#f95b60"
          }
        },
        opposite: true
      }],
      legend:{
        itemStyle:{
          color: 'rgba(255,255,255,.8)'
        }
      },
      tooltip: {
        shared: true
      },
      series: [{
        name: 'Boundaries',
        type: 'spline',
        color: "#6dd9c6",
        lineWidth: 3

      }, {
        name: 'FOWs',
        type: 'spline',
        yAxis: 1,
        color: "#f95b60",
        lineWidth: 3

      }]
    };

  }

  saveInstance(chartInstance): void {
    this.chart = chartInstance;
  }

}
