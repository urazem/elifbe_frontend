import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { routing } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, routing, FormsModule, ReactiveFormsModule],
})
export class ProfileModule {}
