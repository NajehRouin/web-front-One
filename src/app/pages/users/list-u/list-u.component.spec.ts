import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUComponent } from './list-u.component';

describe('ListUComponent', () => {
  let component: ListUComponent;
  let fixture: ComponentFixture<ListUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
