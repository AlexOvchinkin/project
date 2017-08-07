import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWordComponent } from './select-word.component';

describe('SelectWordComponent', () => {
  let component: SelectWordComponent;
  let fixture: ComponentFixture<SelectWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
