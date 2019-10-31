import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sell-modal',
  templateUrl: './sell-modal.component.html',
  styleUrls: ['./sell-modal.component.css']
})
export class SellModalComponent implements OnInit {
  @Input() seatNumber: number;
  @Input() currentSeat;

  constructor() { }

  ngOnInit() {
    console.log(this.currentSeat);
  }

  getId() {
    return this.seatNumber + 'seat';
  }

  book() {
    console.log(this.seatNumber);
  }

}
