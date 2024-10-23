import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousDetailsComponent } from './tous-details.component';

describe('TousDetailsComponent', () => {
  let component: TousDetailsComponent;
  let fixture: ComponentFixture<TousDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousDetailsComponent]
    });
    fixture = TestBed.createComponent(TousDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
