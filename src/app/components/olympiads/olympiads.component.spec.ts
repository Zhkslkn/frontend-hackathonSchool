import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympiadsComponent } from './olympiads.component';

describe('OlympiadsComponent', () => {
  let component: OlympiadsComponent;
  let fixture: ComponentFixture<OlympiadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OlympiadsComponent]
    });
    fixture = TestBed.createComponent(OlympiadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
