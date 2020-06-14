import { Injectable } from "@angular/core";
import { Exercise } from "src/assets/class/exercise";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Material } from "src/assets/class/material";
import { MaterialsComponent } from "../main/materials/materials.component";

@Injectable({
  providedIn: "root",
})
export class TrainingService {
  constructor(private http: HttpClient) {}

  readonly trainingUrl = "http://localhost:8080/training/all";
  readonly materialsUrl = "http://localhost:8080/training/materials";
  readonly materialUrl = "http://localhost:8080/training/materials";

  getExersise(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.trainingUrl);
  }
  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(this.materialsUrl);
  }

  getOneMaterial(name): Observable<Material> {
    return this.http.get<Material>(this.materialUrl + "/" + name);
  }
}
