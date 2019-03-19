import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectexComponent } from './selectex.component';

describe('SelectexComponent', () => {
  let component: SelectexComponent;
  let fixture: ComponentFixture<SelectexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
