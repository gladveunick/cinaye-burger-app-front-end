import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesJournalieresComponent } from './recettes-journalieres.component';

describe('RecettesJournalieresComponent', () => {
  let component: RecettesJournalieresComponent;
  let fixture: ComponentFixture<RecettesJournalieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecettesJournalieresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecettesJournalieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
