import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
onArtist(arg0: string) {
throw new Error('Method not implemented.');
}

  constructor(private http: HttpClient) { }
  public artists: Artist[]=[];

  ngOnInit() {
    return this.http.get<Artist[]>(`http://localhost:4080/api/artists`).subscribe(data => {
      console.log('ma data :', data);
      
      data.forEach((artist:Artist)=> {
        this.artists.push( artist)
      });
      console.log('ma const :', this.artists)

      })
    };
    
  };




