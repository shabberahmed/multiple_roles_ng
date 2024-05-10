import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsDataComponent } from './hospitals-data.component';

describe('HospitalsDataComponent', () => {
  let component: HospitalsDataComponent;
  let fixture: ComponentFixture<HospitalsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
