import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.scss']
})
export class TeamStatsComponent implements OnInit {
  chartOptions: Object;

  topTeams: Array<any> = [];
  team_id: string = "not_present";
  maximumWins: string = "";

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('./assets/data/top_teams.json')
      .subscribe(
        (res: Array<any>) => {
          this.topTeams = res.slice(0,5);
          this.team_id = res[0]["Team_Id"];
          this.maximumWins = this.topTeams.slice(0,3).map(el => el["Team_Name"]).join(", ");
        }
      )
  }

  select(id){
    this.team_id = id;
  }

}
