import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializedShoppingListComponent } from './materialized-shopping-list.component';

describe('MaterializedShoppingListComponent', () => {
  let component: MaterializedShoppingListComponent;
  let fixture: ComponentFixture<MaterializedShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterializedShoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterializedShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
