import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocRequestsComponent } from './doc-requests.component';

describe('DocRequestsComponent', () => {
  let component: DocRequestsComponent;
  let fixture: ComponentFixture<DocRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
