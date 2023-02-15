import { Component } from '@angular/core';
import { Album } from './models/album';
import { Artist } from './models/artist';
const artists = require('../assets/resources/artists.json');
const albums = require('../assets/resources/albums.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public artists :Artist[]= artists;
  public albums :Album[]= albums;
}
