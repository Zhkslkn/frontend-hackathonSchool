import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StillDepelopingComponent } from './still-depeloping.component';

describe('StillDepelopingComponent', () => {
  let component: StillDepelopingComponent;
  let fixture: ComponentFixture<StillDepelopingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StillDepelopingComponent]
    });
    fixture = TestBed.createComponent(StillDepelopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
