import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RHSideComponent } from './rh-side.component';

describe('RHSideComponent', () => {
  let component: RHSideComponent;
  let fixture: ComponentFixture<RHSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RHSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RHSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
