import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistReviewComponent } from './artist-review.component';

describe('ArtistReviewComponent', () => {
  let component: ArtistReviewComponent;
  let fixture: ComponentFixture<ArtistReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
