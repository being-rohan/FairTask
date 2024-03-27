import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/model/interface';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {

  @Input() faiobj!: Ifairs
  constructor() { }

  ngOnInit(): void {
  }

}
