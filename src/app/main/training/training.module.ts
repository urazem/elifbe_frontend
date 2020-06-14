import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { routing } from "./training-routing.module";

import { WordTranslateComponent } from "./word-translate/word-translate.component";
import { TrainingComponent } from "./training.component";
import { WordConstructorComponent } from './word-constructor/word-constructor.component';
import { VocabularyCardsComponent } from './vocabulary-cards/vocabulary-cards.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [WordTranslateComponent, TrainingComponent, WordConstructorComponent, VocabularyCardsComponent],
  exports: [WordTranslateComponent]
})
export class TrainingModule {}
