import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMPSideComponent } from './emp-side.component';

describe('EMPSideComponent', () => {
  let component: EMPSideComponent;
  let fixture: ComponentFixture<EMPSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMPSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMPSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
