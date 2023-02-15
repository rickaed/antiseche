import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
  {path:"/artists",component:ArtistsComponent},
  {path:"/artists/{id}/albums", component:AlbumsComponent},
  {path:"",component:ArtistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
