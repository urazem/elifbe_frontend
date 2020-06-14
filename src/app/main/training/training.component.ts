import { Component, OnInit } from "@angular/core";
import { TrainingService } from "src/app/services/training.service";
import { Exercise } from "src/assets/class/exercise";

@Component({
  selector: "app-training",
  templateUrl: "./training.component.html",
  styleUrls: ["./training.component.css"],
})
export class TrainingComponent implements OnInit {
  exercises: Exercise[];
  constructor(private appService: TrainingService) {}
  usercolor = "rgb(144, 173, 211)";
  isNormal = true;
  ngOnInit() {
    this.appService.getExersise().subscribe((data) => {
      this.exercises = data;
    });
  }
}
