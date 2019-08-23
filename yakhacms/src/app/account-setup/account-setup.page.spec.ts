import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSetupPage } from './account-setup.page';

describe('AccountSetupPage', () => {
  let component: AccountSetupPage;
  let fixture: ComponentFixture<AccountSetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSetupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
