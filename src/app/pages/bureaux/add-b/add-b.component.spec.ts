import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBComponent } from './add-b.component';

describe('AddBComponent', () => {
  let component: AddBComponent;
  let fixture: ComponentFixture<AddBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
