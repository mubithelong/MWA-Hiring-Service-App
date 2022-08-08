import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkProfileComponent } from './edit-work-profile.component';

describe('EditWorkProfileComponent', () => {
  let component: EditWorkProfileComponent;
  let fixture: ComponentFixture<EditWorkProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWorkProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWorkProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
