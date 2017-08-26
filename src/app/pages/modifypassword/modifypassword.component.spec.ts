import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifypasswordComponent } from './modifypassword.component';

describe('ModifypasswordComponent', () => {
  let component: ModifypasswordComponent;
  let fixture: ComponentFixture<ModifypasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifypasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifypasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
