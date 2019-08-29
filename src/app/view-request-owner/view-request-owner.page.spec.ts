import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestOwnerPage } from './view-request-owner.page';

describe('ViewRequestOwnerPage', () => {
  let component: ViewRequestOwnerPage;
  let fixture: ComponentFixture<ViewRequestOwnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRequestOwnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestOwnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
