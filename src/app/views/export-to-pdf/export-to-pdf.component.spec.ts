import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportToPdfComponent } from './export-to-pdf.component';

describe('ExportToPdfComponent', () => {
  let component: ExportToPdfComponent;
  let fixture: ComponentFixture<ExportToPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportToPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportToPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
