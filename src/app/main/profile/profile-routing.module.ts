import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";

export const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
