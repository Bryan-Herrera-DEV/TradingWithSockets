import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSectionComponent } from './chart-section.component';

describe('ChartSectionComponent', () => {
  let component: ChartSectionComponent;
  let fixture: ComponentFixture<ChartSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
