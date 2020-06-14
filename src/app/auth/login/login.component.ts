import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/auth/authentication.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "src/assets/class/user";
import { TokenStorageService } from "src/app/services/auth/token-storage.service";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  user: User;
  loading = false;
  submitted = false;
  returnUrl: string;

  errorMessage = "";

  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    public authService: AuthenticationService,
    private tokenStorage: TokenStorageService,
    private alertService: AlertService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
    if (this.authService.isLoggedIn) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  get f() {
    return this.signinForm.controls;
  }

  loginUser() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signinForm.invalid) {
      return;
    }

    this.loading = true;

    this.user = this.signinForm.value;
    var sub = this.authService.signIn(this.user).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);

        this.router.navigate([this.returnUrl]);
        // this.reloadPage();
        setTimeout(() => {
          sub.unsubscribe();
        }, 500);
      },
      (error) => {
        this.alertService.error("Неверное имя пользователя или пароль");
        this.loading = false;
      }
    );
  }
  reloadPage() {
    window.location.reload();
  }
}
