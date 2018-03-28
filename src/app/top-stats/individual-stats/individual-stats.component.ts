import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-individual-stats',
  templateUrl: './individual-stats.component.html',
  styleUrls: ['./individual-stats.component.scss']
})
export class IndividualStatsComponent implements OnInit, OnChanges {

  @Input() plot_type;
  @Input() plot_id;

  chartOptions: Object;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

  }

  ngOnChanges(){

    if(this.plot_id==="not_present")
      return;
    let url = './assets/data/player_'+(this.plot_type=="bowler"?"b_":"")+this.plot_id+'_details.json'
    this.http.get(url)
      .subscribe(
        (res) => {
          this.chartOptions = {
            chart: {
              type: 'column'
            },
            title: {
              text: null
            },

            xAxis: {
              gridLineWidth: 1,
              minorGridLineWidth: 0,
              categories: Object.keys(res),
              gridLineColor: 'rgba(255,255,255,.1)',

            },
            yAxis: {
              gridLineWidth:1,
              gridLineColor: 'rgba(255,255,255,.1)',
              allowDecimals: false,
              min: 0,
              title: {
                text: (this.plot_type === "bowler" ? "Total Wickets" : "Total Boundaries")
              }
            },
            legend: {
              enabled: false
            },
            series: [{
              name: (this.plot_type === "bowler" ? "Wickets" : "Boundaries"),
              data: Object.values(res),
              color: 'rgba(255,255,255,.8)'
            }]
          };
        }
      )


  }

}
