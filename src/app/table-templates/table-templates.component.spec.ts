import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTemplatesComponent } from './table-templates.component';

describe('TableTemplatesComponent', () => {
  let component: TableTemplatesComponent;
  let fixture: ComponentFixture<TableTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTemplatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
