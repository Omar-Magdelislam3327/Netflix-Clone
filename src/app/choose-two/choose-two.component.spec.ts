import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTwoComponent } from './choose-two.component';

describe('ChooseTwoComponent', () => {
  let component: ChooseTwoComponent;
  let fixture: ComponentFixture<ChooseTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseTwoComponent]
    });
    fixture = TestBed.createComponent(ChooseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
