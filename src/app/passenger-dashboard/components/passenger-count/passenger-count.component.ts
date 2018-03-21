import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  styleUrls: ['./passenger-count.component.scss'],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <div>Email ends with biz: {{ EmailEndsWithBiz() }}/{{ items?.length }}</div>
    </div>
  `
})
export class PassengerCountComponent {

  @Input() items: Passenger[];

  EmailEndsWithBiz(): number {
    if (!this.items) {
      return;
    }
    return this.items.filter((passenger: Passenger) => passenger.email.endsWith('.biz')).length;
  }
}
