import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctersDataComponent } from './docters-data.component';

describe('DoctersDataComponent', () => {
  let component: DoctersDataComponent;
  let fixture: ComponentFixture<DoctersDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctersDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
