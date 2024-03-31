import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaistyleComponent } from './haistyle.component';

describe('HaistyleComponent', () => {
  let component: HaistyleComponent;
  let fixture: ComponentFixture<HaistyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaistyleComponent]
    });
    fixture = TestBed.createComponent(HaistyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
