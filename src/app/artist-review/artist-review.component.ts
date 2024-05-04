import { Component, Input } from '@angular/core';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-artist-review',
  standalone: true,
  imports: [],
  templateUrl: './artist-review.component.html',
  styleUrl: './artist-review.component.css'
})
export class ArtistReviewComponent {


  
  @Input() reviwe: Review

  constructor() {
    this.reviwe = {
      artist: 'The Beatles',
      album: 'Abbey Road',
      song_name: 'Come Together',
      album_img: 'https://cdn-icons-png.flaticon.com/512/160/160187.png',
      time_ago: '4 days ago'
    } 
  }
}
