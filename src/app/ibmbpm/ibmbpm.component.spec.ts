import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmbpmComponent } from './ibmbpm.component';

describe('IbmbpmComponent', () => {
  let component: IbmbpmComponent;
  let fixture: ComponentFixture<IbmbpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbmbpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbmbpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
