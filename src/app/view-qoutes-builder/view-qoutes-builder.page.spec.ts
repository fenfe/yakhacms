import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQoutesBuilderPage } from './view-qoutes-builder.page';

describe('ViewQoutesBuilderPage', () => {
  let component: ViewQoutesBuilderPage;
  let fixture: ComponentFixture<ViewQoutesBuilderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQoutesBuilderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQoutesBuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
