import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['./passenger-detail.component.scss'],
  template: `
    <div class="name">
      <span class="status" [class.checked-in]="detail.website"></span>
      <span>
        <input
          type="text"
          *ngIf="nameEditState"
          [value]="detail.username"
          (input)="onNameChange(name.value)"
          #name>
      </span>
      <span *ngIf="!nameEditState">
        {{ detail.username }}
      </span>
    </div>
    <div class="zipcode">
      Zipcode:
      {{ detail.address.zipcode }}
    </div>
    <div class="phone">
      Phone: {{ detail.phone }}, length: {{ detail.phone?.length || 0 }}
    </div>

    <button (click)="toggleEditState()">
      {{ nameEditState ? 'Done' : 'Edit' }}
    </button>
    <button (click)="onRemove()">Remove</button>
    <button (click)="goToPassenger()">View</button>
  `
})
export class PassengerDetailComponent implements OnChanges {

  @Input() detail: Passenger;

  @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  nameEditState: boolean = false;

  constructor() { }

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  toggleEditState() {
    if (this.nameEditState) {
      this.edit.emit(this.detail);
    }
    this.nameEditState = !this.nameEditState;
  }

  onNameChange(value: string) {
    this.detail.username = value;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

  goToPassenger() {
    this.view.emit(this.detail);
  }
}
