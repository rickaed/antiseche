import { Component } from '@angular/core';
const artists = require('../assets/resources/artists.json');
const albums = require('../assets/resources/albums.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public artists = artists;
  public albums = albums;
}
