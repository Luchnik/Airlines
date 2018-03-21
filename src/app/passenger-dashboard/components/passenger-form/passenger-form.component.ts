import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['./passenger-form.component.scss'],
  template: `
    <form
      novalidate
      #form="ngForm"
      (ngSubmit)="handleSubmit(form.value, form.valid)">
      <div>
        Passenger name:
        <input
          required
          type="text"
          name="username"
          #username="ngModel"
          [ngModel]="detail?.username">
        <div *ngIf="username.dirty && username.errors?.required" class="error">
          Passenger name is required
        </div>
      </div>

      <div>
        Passenger id:
        <input
          required
          type="number"
          name="id"
          #id="ngModel"
          [ngModel]="detail?.id">
        <div *ngIf="id.dirty && id.errors?.required" class="error">
          Passenger ID is required
        </div>
      </div>

      <div>
        <label>
          <input
            type="radio"
            [value]="true"
            name="checkedIn">
          Yes
        </label>
        <label>
          <input
            type="radio"
            [value]="false"
            name="checkedIn">
          No
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.ckeckedIn"
            (ngModelChange)="toggleCheckedIn($event)">
          Checked in
        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input
          type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate">
      </div>

      <div>
        Baggage
        <select
          name="baggage"
          [ngModel]="">
          <option
            *ngFor="let item of baggage"
            [ngValue]="item.key">
            {{ item.value }}
          </option>
        </select>
      </div>

      <button
        type="submit"
        [disabled]="form.invalid">
        Update passenger
      </button>
    </form>
  `
})
export class PassengerFormComponent {

  @Input() detail: Passenger;
  @Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage'
    },
    {
      key: 'hand-only',
      value: 'Hand baggage'
    },
    {
      key: 'hold-only',
      value: 'Hold baggage'
    },
    {
      key: 'hand-hold',
      value: 'Hand and hold baggage'
    }
  ];

  toggleCheckedIn(checkedIn) {
    if (checkedIn) {
      this.detail['checkInDate'] = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}
