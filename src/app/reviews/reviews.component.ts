import { Component, Input } from '@angular/core';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

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
