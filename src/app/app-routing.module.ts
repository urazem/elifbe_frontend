import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./main/home/home.component";
import { MaterialsComponent } from "./main/materials/materials.component";
import { VocabularyComponent } from "./main/vocabulary/vocabulary.component";
import { AuthGuard } from "./services/auth/auth.guard";
import { ProfileComponent } from "./main/profile/profile.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { MyVocabularyComponent } from "./main/vocabulary/my-vocabulary/my-vocabulary.component";
import { MaterialPageComponent } from "./main/materials/material-page/material-page.component";
import { ProgressComponent } from "./components/progress/progress.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "materials-page", component: MaterialPageComponent },
  {
    path: "",
    loadChildren: () =>
      import("./main/home/home.module").then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: "profile",

    children: [{ path: "", component: ProfileComponent }],
    // loadChildren: () =>
    //   import("./main/profile/profile.module").then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: "progress",

    children: [{ path: "", component: ProgressComponent }],
    // loadChildren: () =>
    //   import("./main/profile/profile.module").then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: "materials",
    component: MaterialsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "my-vocabulary",
    component: MyVocabularyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "vocabulary",
    component: VocabularyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "material-page/:material",
    component: MaterialPageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "training",
    loadChildren: () =>
      import("./main/training/training.module").then((m) => m.TrainingModule),
    canActivate: [AuthGuard],
  },

  // otherwise redirect to home
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
