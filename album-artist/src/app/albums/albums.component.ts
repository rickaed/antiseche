import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/album';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  routeSub: any;
  artistId!: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  public albums!: Album[];

  ngOnInit() {
    this.getIdArtist();
    this.getAlbumList();
  };
  
  getIdArtist() {
    this.albums = []
    this.routeSub = this.route.params.subscribe(params => {
      this.artistId = params['id']
    });
  };

  getAlbumList() {
    return this.http.get<Album[]>(`http://localhost:4080/api/artists/${this.artistId}/albums`).subscribe(data => {
      console.log('response :', data);
      this.albums = data.filter(album => album.artists[0].id === this.artistId)
      this.albums = this.albums.filter(
        (obj, index) =>
          this.albums.findIndex((item) => item.name === obj.name) === index
      );
    });
  }
}