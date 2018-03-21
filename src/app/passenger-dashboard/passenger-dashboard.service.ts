import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

import { Passenger } from './models/passenger.interface';

@Injectable()
export class PassengerDashboardService {

  private PASSENGER_API: string = 'http://jsonplaceholder.typicode.com/users';

  constructor(
    private http: Http
  ) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(this.PASSENGER_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get(`${this.PASSENGER_API}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const options = new RequestOptions({
      headers: headers
    });

    return this.http
      .put(`${this.PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${this.PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}