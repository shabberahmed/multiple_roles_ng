import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntititesComponent } from './admin-entitites.component';

describe('AdminEntititesComponent', () => {
  let component: AdminEntititesComponent;
  let fixture: ComponentFixture<AdminEntititesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEntititesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEntititesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
