import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDispatchAreaComponent } from './create-dispatch-area.component';

describe('CreateDispatchAreaComponent', () => {
  let component: CreateDispatchAreaComponent;
  let fixture: ComponentFixture<CreateDispatchAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDispatchAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDispatchAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
