import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyMessagePage } from './reply-message.page';

describe('ReplyMessagePage', () => {
  let component: ReplyMessagePage;
  let fixture: ComponentFixture<ReplyMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyMessagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
