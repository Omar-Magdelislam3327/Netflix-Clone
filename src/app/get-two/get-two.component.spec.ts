import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTwoComponent } from './get-two.component';

describe('GetTwoComponent', () => {
  let component: GetTwoComponent;
  let fixture: ComponentFixture<GetTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTwoComponent]
    });
    fixture = TestBed.createComponent(GetTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
