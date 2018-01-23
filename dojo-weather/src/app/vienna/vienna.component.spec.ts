import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViennaComponent } from './vienna.component';

describe('ViennaComponent', () => {
  let component: ViennaComponent;
  let fixture: ComponentFixture<ViennaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViennaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
