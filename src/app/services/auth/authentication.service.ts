import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "src/assets/class/user";
import { JwtResponse } from "./jwt_response";
import { TokenStorageService } from "./token-storage.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  readonly endpoint: string = "http://localhost:8080/api/v1/auth";
  // readonly endpoint: string = "https://elifbe.herokuapp.com/api/v1/auth";
  headers = new HttpHeaders().set("Content-Type", "application/json");
  currentUser = {};
  constructor(
    private http: HttpClient,
    public router: Router,
    private tokenStorage: TokenStorageService
  ) {}

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/registration`;
    return this.http
      .post(api, user, httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Sign-in
  signIn(user: User): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(
      `${this.endpoint}/login`,
      user,
      httpOptions
    );
  }

  get isLoggedIn(): boolean {
    let authToken = this.tokenStorage.getToken();
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = this.tokenStorage.getToken();
    if (removeToken == null) {
      this.router.navigate(["login"]);
    }
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
