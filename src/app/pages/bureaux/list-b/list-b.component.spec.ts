import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBComponent } from './list-b.component';

describe('ListBComponent', () => {
  let component: ListBComponent;
  let fixture: ComponentFixture<ListBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
