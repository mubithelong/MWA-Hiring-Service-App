import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkerProfileComponent } from './create-worker-profile.component';

describe('CreateWorkerProfileComponent', () => {
  let component: CreateWorkerProfileComponent;
  let fixture: ComponentFixture<CreateWorkerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorkerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWorkerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
