import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies = [
    {
      title: 'The Avenger',
      date: '12-05-2019',
      time: '08:00am',
      description: `Your program should allow the user to sell tickets one at a time. The user should be able to sell
as many tickets as they would like. Do this with some sort of prompt or menu asking the user if they
would like to sell another ticket. Don’t forget to validate input data if you need to: When tickets are being
sold, do not accept row or seat numbers that do not exist. When someone requests a particular seat,
the program should make sure that seat is available before it is sold`,
      img: 'assets/movies/pic1.jpeg'
    },
    {
      title: 'The Avenger',
      date: '12-05-2019',
      time: '08:00am',
      description: `Your program should allow the user to sell tickets one at a time. The user should be able to sell
as many tickets as they would like. Do this with some sort of prompt or menu asking the user if they
would like to sell another ticket. Don’t forget to validate input data if you need to: When tickets are being
sold, do not accept row or seat numbers that do not exist. When someone requests a particular seat,
the program should make sure that seat is available before it is sold`,
      img: 'assets/movies/pic1.jpeg'
    },
    {
      title: 'The Avenger',
      date: '12-05-2019',
      time: '08:00am',
      description: `Your program should allow the user to sell tickets one at a time. The user should be able to sell
as many tickets as they would like. Do this with some sort of prompt or menu asking the user if they
would like to sell another ticket. Don’t forget to validate input data if you need to: When tickets are being
sold, do not accept row or seat numbers that do not exist. When someone requests a particular seat,
the program should make sure that seat is available before it is sold`,
      img: 'assets/movies/pic1.jpeg'
    },
    {
      title: 'The Avenger',
      date: '12-05-2019',
      time: '08:00am',
      description: `Your program should allow the user to sell tickets one at a time. The user should be able to sell
as many tickets as they would like. Do this with some sort of prompt or menu asking the user if they
would like to sell another ticket. Don’t forget to validate input data if you need to: When tickets are being
sold, do not accept row or seat numbers that do not exist. When someone requests a particular seat,
the program should make sure that seat is available before it is sold`,
      img: 'assets/movies/pic1.jpeg'
    },
    {
      title: 'The Avenger',
      date: '12-05-2019',
      time: '08:00am',
      description: `Your program should allow the user to sell tickets one at a time. The user should be able to sell
as many tickets as they would like. Do this with some sort of prompt or menu asking the user if they
would like to sell another ticket. Don’t forget to validate input data if you need to: When tickets are being
sold, do not accept row or seat numbers that do not exist. When someone requests a particular seat,
the program should make sure that seat is available before it is sold`,
      img: 'assets/movies/pic1.jpeg'
    },
    {
      title: 'The Avenger',
      date: '12-05-2019',
      time: '08:00am',
      description: `Your program should allow the user to sell tickets one at a time. The user should be able to sell
as many tickets as they would like. Do this with some sort of prompt or menu asking the user if they
would like to sell another ticket. Don’t forget to validate input data if you need to: When tickets are being
sold, do not accept row or seat numbers that do not exist. When someone requests a particular seat,
the program should make sure that seat is available before it is sold`,
      img: 'assets/movies/pic1.jpeg'
    },
    {
      title: 'The Avenger',
      date: '12-05-2019',
      time: '08:00am',
      description: `Your program should allow the user to sell tickets one at a time. The user should be able to sell
as many tickets as they would like. Do this with some sort of prompt or menu asking the user if they
would like to sell another ticket. Don’t forget to validate input data if you need to: When tickets are being
sold, do not accept row or seat numbers that do not exist. When someone requests a particular seat,
the program should make sure that seat is available before it is sold`,
      img: 'assets/movies/pic1.jpeg'
    },
    {
      title: 'The Avenger',
      date: '12-05-2019',
      time: '08:00am',
      description: `Your program should allow the user to sell tickets one at a time. The user should be able to sell
as many tickets as they would like. Do this with some sort of prompt or menu asking the user if they
would like to sell another ticket. Don’t forget to validate input data if you need to: When tickets are being
sold, do not accept row or seat numbers that do not exist. When someone requests a particular seat,
the program should make sure that seat is available before it is sold`,
      img: 'assets/movies/pic1.jpeg'
    },
    {
      title: 'The Avenger',
      date: '12-05-2019',
      time: '08:00am',
      description: `Your program should allow the user to sell tickets one at a time. The user should be able to sell
as many tickets as they would like. Do this with some sort of prompt or menu asking the user if they
would like to sell another ticket. Don’t forget to validate input data if you need to: When tickets are being
sold, do not accept row or seat numbers that do not exist. When someone requests a particular seat,
the program should make sure that seat is available before it is sold`,
      img: 'assets/movies/pic1.jpeg'
    }
  ];

  constructor() { }
  getMovies() {
    return this.movies;
  }
  getMovie(tite: string) {
    return this.movies[0];
  }
}
