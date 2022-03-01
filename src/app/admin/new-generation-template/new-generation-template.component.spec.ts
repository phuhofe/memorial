import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGenerationTemplateComponent } from './new-generation-template.component';

describe('NewGenerationTemplateComponent', () => {
  let component: NewGenerationTemplateComponent;
  let fixture: ComponentFixture<NewGenerationTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGenerationTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGenerationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
