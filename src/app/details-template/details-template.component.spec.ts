import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTemplateComponent } from './details-template.component';

describe('DetailsTemplateComponent', () => {
  let component: DetailsTemplateComponent;
  let fixture: ComponentFixture<DetailsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
