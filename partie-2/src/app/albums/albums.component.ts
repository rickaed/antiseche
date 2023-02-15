import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.artistId = params['id']
    });
    return this.http.get<Album[]>(`http://localhost:4080/api/artists/${this.artistId}/albums`).subscribe(data => {
      console.log('response :', data);
      data.forEach((album:Album )=> {
        if (album.artists[0].id === this.artistId)
        console.log(album.name);
        
        this.albums.push(album)
      });
      console.log(this.albums)
        // album.artists[0].id=this.artistId
      });
      // console.log(this.albums)
    };
  }


