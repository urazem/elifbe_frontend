import { Injectable } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Word } from "../../assets/class/word";
import { Training } from "src/assets/class/training";
import { Image } from "src/assets/class/image";
import { Material } from "src/assets/class/material";
import { SetWords } from "src/assets/class/set_words";
import { User } from "src/assets/class/user";
import { tap, map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class VocabularyService {
  wordsUrl = "../../assets/data/word.json";
  wordsUrl1 = "../../assets/data/word1.json";
  training = "../../assets/data/trainings.json";
  images = "../../assets/data/image.json";
  materials = "../../assets/data/materials.json";

  readonly setUrl = "http://localhost:8080/api/v1/user/sets/all";
  readonly addSetUrl = "http://localhost:8080/api/v1/user/sets/add";
  readonly deleteSetUrl = "http://localhost:8080/api/v1/user/sets/delete";
  readonly userSetUrl = "http://localhost:8080/api/v1/user/sets/userSets";
  // readonly setUrl = "https://elifbe2.herokuapp.com/api/v1/user/sets/all";
  // readonly addSetUrl = "http://localhost:8080/api/v1/user/sets/add";
  // readonly deleteSetUrl = "http://localhost:8080/api/v1/user/sets/delete";
  // readonly userSetUrl = "https://elifbe2.herokuapp.com/api/v1/user/sets/userSets/1";
  constructor(private http: HttpClient) {}

  getWords(): Observable<Word[]> {
    return this.http.get<Word[]>(this.wordsUrl);
  }
  getWords1(): Observable<Word[]> {
    return this.http.get<Word[]>(this.wordsUrl1);
  }
  getW1(): Observable<Word[]> {
    return this.http.get<Word[]>("../../assets/data/w1.json");
  }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.images);
  }
  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(this.materials);
  }
  getOne(): Observable<Material> {
    return this.http.get<Material>(this.materials[1]);
  }

  getSets(): Observable<SetWords[]> {
    return this.http.get<SetWords[]>(this.setUrl);
  }
  getUserSets(user_id: string): Observable<any> {
    return this.http.get<any>(this.userSetUrl + "/" + user_id);
  }
  addSet(id: string, user: User): Observable<any> {
    return this.http.post<any>(this.addSetUrl + "/" + id, user);
  }
  deleteSet(user_id: string, id: string): Observable<any> {
    return this.http.delete<any>(this.deleteSetUrl + "/" + user_id + "/" + id);
  }
}
