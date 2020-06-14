import { Component, OnInit, Input } from "@angular/core";
import { Training } from "src/assets/class/training";
import { VocabularyService } from "src/app/services/vocabulary.service";
import { Material } from "src/assets/class/material";
import { TrainingService } from "src/app/services/training.service";
import { Exercise } from "src/assets/class/exercise";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  trainings: Exercise[]; //здесь делаю запрос на тренировки все, потом передаю их дочернему компоненту training
  materials: Material[]; //здесь делаю запрос на тренировки все, потом передаю их дочернему компоненту training
  slider: number = 0;
  constructor(
    private vocabularyService: VocabularyService,
    private appService: TrainingService
  ) {}

  colors = ["#9cacec", "#f3a498", "rgb(62, 202, 151)", "rgb(241, 178, 119)"];

  ngOnInit() {
    this.appService.getExersise().subscribe((data) => {
      this.trainings = data;
    });
    this.vocabularyService.getMaterials().subscribe((data) => {
      this.materials = data;
    });
  }
}
