import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUComponent } from './add-u.component';

describe('AddUComponent', () => {
  let component: AddUComponent;
  let fixture: ComponentFixture<AddUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
