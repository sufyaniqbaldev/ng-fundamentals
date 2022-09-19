import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventListComponent } from './events/event-list.component';
import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-tumbnail.component';
import { NavbarComponent } from './nav/navbar.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
