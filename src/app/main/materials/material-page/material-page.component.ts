import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Material } from "src/assets/class/material";
import { VocabularyService } from "src/app/services/vocabulary.service";
import { TrainingService } from "src/app/services/training.service";

@Component({
  selector: "app-material-page",
  templateUrl: "./material-page.component.html",
  styleUrls: ["./material-page.component.css"],
})
export class MaterialPageComponent implements OnInit {
  materialTitle;
  material: Material;
  constructor(private route: ActivatedRoute, private v: TrainingService) {}
  video;
  ngOnInit(): void {
    this.materialTitle = this.route.snapshot.paramMap.get("material");

    this.v.getOneMaterial(this.materialTitle).subscribe((d) => {
      this.material = d[0];
      console.log(this.material);
    });

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
}
