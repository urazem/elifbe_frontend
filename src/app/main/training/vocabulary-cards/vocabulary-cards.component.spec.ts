import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyCardsComponent } from './vocabulary-cards.component';

describe('VocabularyCardsComponent', () => {
  let component: VocabularyCardsComponent;
  let fixture: ComponentFixture<VocabularyCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
