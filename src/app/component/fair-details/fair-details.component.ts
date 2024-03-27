import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifairs } from 'src/app/model/interface';
import { FairsService } from 'src/app/services/fairs.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {

  fairid!: string;
  fairobjs!: Ifairs
  constructor(private _route: ActivatedRoute,
    private _fairobj: FairsService) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((parms: Params) => {
        this.fairid = parms['fairsId'];
        this.fairobjs = this._fairobj.fetchfairid(this.fairid)

      })
  }


}
