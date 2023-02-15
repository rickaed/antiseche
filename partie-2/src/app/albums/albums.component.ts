import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Album } from '../models/album';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  public albums!: Album[] ;
  ngOnInit() {

    
    
// return this.http.get<Album[]>(`http://localhost:4080/api/${transfert}`).subscribe(data =>{
//   console.log(data)
// })
  }

}
