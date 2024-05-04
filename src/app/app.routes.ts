import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumsReviewComponent } from './albums-review/albums-review.component';
import { ArtistReviewComponent } from './artist-review/artist-review.component';
import { ReviewsComponent } from './reviews/reviews.component';

export const routes: Routes = [ 
    {path: '', component: ReviewsComponent},
    {path: 'home', component: ReviewsComponent},
    {path: 'album', component: AlbumsReviewComponent},
    {path: 'artist', component: ArtistReviewComponent},
    {path: 'callback', component: ReviewsComponent},
    // { path: 'callback', redirectTo: '/album', pathMatch: 'full' }
];
