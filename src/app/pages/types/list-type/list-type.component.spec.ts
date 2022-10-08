import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeComponent } from './list-type.component';

describe('ListTypeComponent', () => {
  let component: ListTypeComponent;
  let fixture: ComponentFixture<ListTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
