import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingSuitesComponent } from './testing-suites.component';

describe('TestingSuitesComponent', () => {
  let component: TestingSuitesComponent;
  let fixture: ComponentFixture<TestingSuitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingSuitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingSuitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
