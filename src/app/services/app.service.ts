import { Injectable } from "@angular/core";
import { TokenStorageService } from "./auth/token-storage.service";
import { Observable } from "rxjs";
import { User } from "src/assets/class/user";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AppService {
  readonly getUserUrl = "http://localhost:8080/api/v1/user";
  readonly saveImageUrl = "http://localhost:8080/api/v1/user/uploadImage";
  constructor(
    private tokenService: TokenStorageService,
    private http: HttpClient
  ) {}

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(this.getUserUrl + "/" + username);
  }
  saveUserSettings(user: User): Observable<User> {
    return this.http.put<User>(this.getUserUrl + "/save", user);
  }

  saveImage(image) {
    return this.http.post(this.saveImageUrl, image);
  }
}
