import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesAnnulerComponent } from './commandes-annuler.component';

describe('CommandesAnnulerComponent', () => {
  let component: CommandesAnnulerComponent;
  let fixture: ComponentFixture<CommandesAnnulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesAnnulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesAnnulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
