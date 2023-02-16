import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public artists: Artist[] = [];

  ngOnInit() {
    this.getArtistList()
  };
  getArtistList() {
    return this.http.get<Artist[]>(`http://localhost:4080/api/artists`).subscribe(data => {
      data.forEach((artist: Artist) => {
        this.artists.push(artist)
      });
    })
  }
}