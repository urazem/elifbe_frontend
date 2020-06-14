import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordConstructorComponent } from './word-constructor.component';

describe('WordConstructorComponent', () => {
  let component: WordConstructorComponent;
  let fixture: ComponentFixture<WordConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
