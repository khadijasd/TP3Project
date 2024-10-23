import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeShopComponent } from './cake-shop.component';

describe('CakeShopComponent', () => {
  let component: CakeShopComponent;
  let fixture: ComponentFixture<CakeShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeShopComponent]
    });
    fixture = TestBed.createComponent(CakeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
