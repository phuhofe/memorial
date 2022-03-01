import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbraDumbraViewComponent } from './umbra-dumbra-view.component';

describe('UmbraDumbraViewComponent', () => {
  let component: UmbraDumbraViewComponent;
  let fixture: ComponentFixture<UmbraDumbraViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmbraDumbraViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmbraDumbraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
