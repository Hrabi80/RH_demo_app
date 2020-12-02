import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SRHSideComponent } from './srh-side.component';

describe('SRHSideComponent', () => {
  let component: SRHSideComponent;
  let fixture: ComponentFixture<SRHSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SRHSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SRHSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
