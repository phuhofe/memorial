import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetNoticeTemplateComponent } from './net-notice-template.component';

describe('NetNoticeTemplateComponent', () => {
  let component: NetNoticeTemplateComponent;
  let fixture: ComponentFixture<NetNoticeTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetNoticeTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetNoticeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
