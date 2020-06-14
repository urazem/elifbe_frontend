import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./services/auth/authentication.service";
import { TokenStorageService } from "./services/auth/token-storage.service";
import { AppService } from "./services/app.service";
import { User } from "src/assets/class/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  currentUser: User; //записать нового пользователя здесь в апптс потом передать через инпут навбару
  constructor(
    private tokenStorage: TokenStorageService,
    public authService: AuthenticationService,
    public appService: AppService
  ) {}
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      var sub = this.appService
        .getUserByUsername(this.tokenStorage.getUsername())
        .subscribe((user) => {
          this.currentUser = user;
          setTimeout(() => {
            sub.unsubscribe();
          }, 6000);
        });
    }
  }
  logout() {
    this.tokenStorage.signOut();
    this.authService.doLogout();
  }
}
