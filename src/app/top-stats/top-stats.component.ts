import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-top-stats',
  templateUrl: './top-stats.component.html',
  styleUrls: ['./top-stats.component.scss']
})
export class TopStatsComponent implements OnInit {

  topPlayers: Array<any> = [];
  topBowlers: Array<any> = [];

  topPlayersInsight: string = "";
  topBowlerInsight: string = "";

  player_id = "not_present";
  bowler_id = "not_present";

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('./assets/data/top_players.json')
      .subscribe(
        (res: Array<any>) => {
          this.topPlayers = res.slice(0,5);
          this.player_id = res[0]["Player_Id"];
          this.topPlayersInsight = this.topPlayers.slice(0,3).map(el => el["Player_Name"]).join(", ");
        }
      )

    this.http.get('./assets/data/top_bowlers.json')
      .subscribe(
        (res: Array<any>) => {
          this.topBowlers = res.slice(0,5);
          this.bowler_id = res[0]["Player_Id"];
          this.topBowlerInsight = this.topBowlers.slice(0,3).map(el => el["Player_Name"]).join(", ");
        }
      )
  }

  select(type, id){
    console.log(id);
    if(type==="bowler")
      this.bowler_id = id;
    else
      this.player_id = id;
  }

}
