import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardViewComponent } from './standard-view.component';

describe('StandardViewComponent', () => {
  let component: StandardViewComponent;
  let fixture: ComponentFixture<StandardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
