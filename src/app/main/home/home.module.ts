import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { MaterialsComponent } from "src/app/components/materials/materials.component";
import { TrainingBlockComponent } from "src/app/components/training-block/training-block.component";

@NgModule({
  declarations: [HomeComponent, MaterialsComponent, TrainingBlockComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [MaterialsComponent],
})
export class HomeModule {}
