import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FileReaderService } from '../file-reader.service';
import { ActivatedRoute } from '@angular/router';
import { SeatServiceService } from '../shared/seat-service.service';
import { Seat } from '../seats/seats-class';
//
declare var $: any;
@Component({
  selector: 'app-hall-map',
  templateUrl: './hall-map.component.html',
  styleUrls: ['./hall-map.component.css']
})
export class HallMapComponent implements OnInit {
  totalSales = 0;
  availableSeats = 0;
  totalTicketSold = 0;
  hallArrangment = [];
  ECONOMY_PRICE;
  VIP_PRICE;
  VERY_VIP_PRICE;
  TWINS_SEATS_PRICE;
  priceString;
  movie = null;
  seatNumber: number;
  currentSeatNumber = 0;
  currentSeat: Seat;

  constructor(
    private moviesService: MovieService,
    private activatedRoute: ActivatedRoute,
    private seatService: SeatServiceService
    ) {
   }

  ngOnInit() {

    this.TWINS_SEATS_PRICE = parseInt(this.activatedRoute.snapshot.data.prices.split(' ')[0], 10);
    this.VERY_VIP_PRICE = parseInt(this.activatedRoute.snapshot.data.prices.split(' ')[1], 10);
    this.VIP_PRICE = parseInt(this.activatedRoute.snapshot.data.prices.split(' ')[2], 10);
    this.ECONOMY_PRICE = parseInt(this.activatedRoute.snapshot.data.prices.split(' ')[3], 10);


    this.movie = this.moviesService.getMovie('My Clude');
    this.showSeatStatus();
    $(document).ready(() => {
      $(() => {
        $('[data-toggle="tooltip"]').tooltip();
      });
    });
  }

  showSeatStatus() {
    this.hallArrangment = this.seatService.initializeSeats(
      this.ECONOMY_PRICE,
      this.VIP_PRICE,
      this.VERY_VIP_PRICE,
      this.TWINS_SEATS_PRICE
    );
    this.availableSeats = this.hallArrangment[15][19].getId();
  }

  getNumberOfSeatAvailable() {
    return this.seatNumber - this.totalTicketSold;
  }

  getTotalSales() {
    return this.totalSales;
  }

  setSeatNumber(seatNumber: number, y: number, x: number) {
    // console.log(seatNumber);
    // console.log(this.hallArrangment[y][x]);
  }

  setCurrentSeat(seat) {
    this.currentSeat = seat;
  }

  sellTick() {
    this.totalSales =  this.totalSales + this.currentSeat.getPrice();
    this.totalTicketSold++;
    this.availableSeats--;
    this.currentSeat.setAvailability(false);
  }
}
