import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManicureComponent } from './manicure.component';

describe('ManicureComponent', () => {
  let component: ManicureComponent;
  let fixture: ComponentFixture<ManicureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManicureComponent]
    });
    fixture = TestBed.createComponent(ManicureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
