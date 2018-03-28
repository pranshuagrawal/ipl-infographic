import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-individual-team-stats',
  templateUrl: './individual-team-stats.component.html',
  styleUrls: ['./individual-team-stats.component.scss']
})
export class IndividualTeamStatsComponent implements OnInit, OnChanges{

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

    const colorMapping = {
      "team_7": "#04a9f4",
      "team_3": "#f5d02a",
      "team_2": "#c28f22",
      "team_1": "#9c27b0",
      "team_4": "#de433b"
    }

    let url = './assets/data/team_'+this.plot_id+'_details.json';
    this.http.get(url)
      .subscribe(
        (res) => {
          this.chartOptions = {
            chart: {
              type: 'line'
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
                text: "Total Wins"
              }
            },
            legend: {
              enabled: false
            },
            tooltip:{
              enabled: false
            },
            plotOptions: {
              series: {
                shadow: true,
                lineWidth: 2,
                dataLabels: {
                  enabled: true,
                  formatter: function(){
                    return '<span class="datalabel">'+this.y+'</span>'
                  },
                  useHTML: true
                },

              }
            },
            series: [{
              name: "Wins",
              data: Object.values(res),
              //color: 'rgba(255,255,255,.8)',
              color: colorMapping["team_"+this.plot_id]
            }]
          };
        }
      )


  }

}
