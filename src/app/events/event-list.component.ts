import { Component } from '@angular/core'

@Component({
  selector: 'event-list',
  template: `
    <div>
      <h1>Upcomming Rails Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event]="event"> </event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventListComponent {
  events = [
    {
      id: 1,
      name: 'Angular on Rails',
      date: '12/12/2022',
      time: '10:00 am',
      price: 599.0,
      imageURL: 'assets/images/win11second.jpg',
      location: {
        address: '20 Mound Offices Block Paragon City',
        city: 'Lahore',
        country: 'Pakistan',
      },
    },
    {
      id: 2,
      name: 'Angular on Rails',
      date: '13/12/2022',
      time: '10:00 pm',
      price: 599.0,
      imageURL: 'assets/images/sufyan.jpeg',
      onlineUrl: 'https://meet.google.com/qdc-yfur-kgj',
    },
    {
      id: 3,
      name: 'Angular on Rails',
      date: '14/12/2022',
      time: '10:00 pm',
      price: 599.0,
      imageURL: 'assets/images/goori.jpg',
      location: {
        address: '20 Mound Offices Block Paragon City',
        city: 'Lahore',
        country: 'Pakistan',
      },
    },
    {
      id: 4,
      name: 'Angular on Rails',
      date: '15/12/2022',
      time: '10:00 pm',
      price: 599.0,
      imageURL: 'assets/images/goori.jpg',
      location: {
        address: '20 Mound Offices Block Paragon City',
        city: 'Lahore',
        country: 'Pakistan',
      },
    },
  ];
}
