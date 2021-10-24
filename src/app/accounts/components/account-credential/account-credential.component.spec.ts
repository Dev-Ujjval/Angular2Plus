import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCredentialComponent } from './account-credential.component';

describe('AccountCredentialComponent', () => {
  let component: AccountCredentialComponent;
  let fixture: ComponentFixture<AccountCredentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCredentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
