import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBoxComponent } from './power-box.component';

describe('PowerBoxComponent', () => {
  let component: PowerBoxComponent;
  let fixture: ComponentFixture<PowerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
