import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesEnCoursComponent } from './commandes-en-cours.component';

describe('CommandesEnCoursComponent', () => {
  let component: CommandesEnCoursComponent;
  let fixture: ComponentFixture<CommandesEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesEnCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
