import { Component, OnInit, Input } from "@angular/core";
import { Exercise } from "src/assets/class/exercise";

@Component({
  selector: "app-training-block",
  templateUrl: "./training-block.component.html",
  styleUrls: ["./training-block.component.css"],
})
export class TrainingBlockComponent implements OnInit {
  @Input() training: Exercise;
  @Input() color: String;
  constructor() {}

  ngOnInit() {}
}
