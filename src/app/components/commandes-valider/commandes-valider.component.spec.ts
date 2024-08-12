import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesValiderComponent } from './commandes-valider.component';

describe('CommandesValiderComponent', () => {
  let component: CommandesValiderComponent;
  let fixture: ComponentFixture<CommandesValiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesValiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesValiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
