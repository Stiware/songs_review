import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsReviewComponent } from './albums-review.component';

describe('AlbumsReviewComponent', () => {
  let component: AlbumsReviewComponent;
  let fixture: ComponentFixture<AlbumsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
