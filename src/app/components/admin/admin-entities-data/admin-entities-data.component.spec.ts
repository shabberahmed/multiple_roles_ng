import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntitiesDataComponent } from './admin-entities-data.component';

describe('AdminEntitiesDataComponent', () => {
  let component: AdminEntitiesDataComponent;
  let fixture: ComponentFixture<AdminEntitiesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEntitiesDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEntitiesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
