import { Component, OnInit, Input } from "@angular/core";
import { Material } from "src/assets/class/material";

@Component({
  selector: "app-material",
  templateUrl: "./materials.component.html",
  styleUrls: ["./materials.component.css"],
})
export class MaterialsComponent implements OnInit {
  @Input() material: Material;
  constructor() {}

  ngOnInit() {}
}
