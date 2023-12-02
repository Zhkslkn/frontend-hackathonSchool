import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOlympiadComponent } from './register-olympiad.component';

describe('RegisterOlympiadComponent', () => {
  let component: RegisterOlympiadComponent;
  let fixture: ComponentFixture<RegisterOlympiadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterOlympiadComponent]
    });
    fixture = TestBed.createComponent(RegisterOlympiadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
