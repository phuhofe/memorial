import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetNoticeViewComponent } from './net-notice-view.component';

describe('NetNoticeViewComponent', () => {
  let component: NetNoticeViewComponent;
  let fixture: ComponentFixture<NetNoticeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetNoticeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetNoticeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
