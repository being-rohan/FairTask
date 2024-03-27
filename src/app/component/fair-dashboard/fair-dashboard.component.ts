import { Component, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/model/interface';
import { FairsService } from 'src/app/services/fairs.service';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {
 fairsarr!:Ifairs[]
  constructor(private _fairsSer:FairsService) { }

  ngOnInit(): void {
    this.fairsarr=this._fairsSer.fetchFairs()
  }

}
