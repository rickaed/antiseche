import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
  { path: 'artists', component: ArtistsComponent },
  // <a [routerLink]="['/artists']">artists</a>
  { path: 'artists/{id}/albums', component: AlbumsComponent },
  // <a [routerLink]="['/artists/{id}/albums'']">album</a>
  {path: '', redirectTo: '/artists', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
