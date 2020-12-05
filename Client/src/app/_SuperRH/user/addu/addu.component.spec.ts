import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduComponent } from './addu.component';

describe('AdduComponent', () => {
  let component: AdduComponent;
  let fixture: ComponentFixture<AdduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
