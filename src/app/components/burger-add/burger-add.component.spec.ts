import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerAddComponent } from './burger-add.component';

describe('BurgerAddComponent', () => {
  let component: BurgerAddComponent;
  let fixture: ComponentFixture<BurgerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
