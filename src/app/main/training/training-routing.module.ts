import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { TrainingComponent } from "./training.component";
import { WordTranslateComponent } from "./word-translate/word-translate.component";
import { WordConstructorComponent } from "./word-constructor/word-constructor.component";
import { VocabularyCardsComponent } from "./vocabulary-cards/vocabulary-cards.component";

export const routes: Routes = [
  {
    path: "word-translate",
    component: WordTranslateComponent,
  },
  {
    path: "translate-word",
    component: WordTranslateComponent,
  },
  // {
  //   path: ":name",
  //   component: WordTranslateComponent,
  // },
  {
    path: "constructor",
    component: WordConstructorComponent,
  },
  {
    path: "vocabulary-cards",
    component: VocabularyCardsComponent,
  },
  {
    path: "",
    component: TrainingComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
