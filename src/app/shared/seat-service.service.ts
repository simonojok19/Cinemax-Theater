import { Injectable } from '@angular/core';
import { Seat } from '../seats/seats-class';
import { FileReaderService } from '../file-reader.service';

@Injectable({
  providedIn: 'root'
})
export class SeatServiceService {
  ECONOMY_PRICE;
  VIP_PRICE;
  VERY_VIP_PRICE;
  TWINS_SEATS_PRICE;
  hallArrangment = [];
  seatNumber: any;

  constructor(private fileService: FileReaderService) { }
  initializeSeats(economy: number, vip: number, vvip: number, twins: number) {
    this.ECONOMY_PRICE = economy;
    this.VIP_PRICE = vip;
    this.VERY_VIP_PRICE = vvip;
    this.TWINS_SEATS_PRICE = twins;
    this.seatNumber = 1;
    for (let y = 0; y < 16; y++) {
      this.hallArrangment[y] = [];
      for (let x = 0; x < 20; x++) {
        const seat = new Seat(this.seatNumber);

        // from m and beyond economy
        if (y >= 12) {
          seat.setStatus('economy');
          seat.setPrice(this.ECONOMY_PRICE);
        }
        // from g to l
        if ( y >= 6 && y <= 11) {
          seat.setStatus('VIP');
          seat.setPrice(this.VIP_PRICE);
        }
        // from a to f vvip
        if ( y <= 5) {
          seat.setStatus('VVIP');
          seat.setPrice(this.VERY_VIP_PRICE);
        }
        // from 4 to 14
        // from 23 t0 33 all are double twin seats
        if ( y <= 1) {
          if ( this.seatNumber >= 5 && this.seatNumber <= 15 ) {
            seat.setStatus('Twin Seats');
          }

          if ( this.seatNumber >= 25 && this.seatNumber <= 35) {
            seat.setStatus('Twin Seats');
          }
          seat.setPrice(this.TWINS_SEATS_PRICE);
        }

        this.hallArrangment[y][x] = seat;
        this.seatNumber++;
      }
    }
    return this.hallArrangment;
  }
}
