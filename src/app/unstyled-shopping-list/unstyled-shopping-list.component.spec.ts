import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnstyledShoppingListComponent } from './unstyled-shopping-list.component';

describe('UnstyledShoppingListComponent', () => {
  let component: UnstyledShoppingListComponent;
  let fixture: ComponentFixture<UnstyledShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnstyledShoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnstyledShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
