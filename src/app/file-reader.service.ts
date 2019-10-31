import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class FileReaderService implements Resolve<any> {
  fileLocation = './assets/file/prices.txt';

  constructor(private http: HttpClient) { }

  resolve(): Observable<any> {
    return this.http.get(this.fileLocation, { responseType: 'text' as 'json'});
  }
}
