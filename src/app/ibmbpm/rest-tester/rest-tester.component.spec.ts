import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestTesterComponent } from './rest-tester.component';

describe('RestTesterComponent', () => {
  let component: RestTesterComponent;
  let fixture: ComponentFixture<RestTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
