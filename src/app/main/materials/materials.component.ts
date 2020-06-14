import { Component, OnInit } from "@angular/core";
import { VocabularyService } from "src/app/services/vocabulary.service";
import { TrainingService } from "src/app/services/training.service";
import { Material } from "src/assets/class/material";

@Component({
  selector: "app-materials",
  templateUrl: "./materials.component.html",
  styleUrls: ["./materials.component.css"],
})
export class MaterialsComponent implements OnInit {
  constructor(private m: TrainingService) {}

  materials: Material[];

  indexDot = 1;
  dotsClicked = false;
  left = "0px";

  ngOnInit() {
    this.m.getMaterials().subscribe((data) => {
      this.materials = data;
    });
  }

  slide(index: any) {
    this.indexDot = index;
    switch (index) {
      case 1: {
        this.left = "0px";
        break;
      }
      case 2: {
        this.left = "-1000px";

        break;
      }
      case 3: {
        this.left = "-2000px";
        break;
      }
    }
  }
}
