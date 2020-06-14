import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/services/auth/authentication.service";
import { Router } from "@angular/router";
import { User } from "src/assets/class/user";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user: User;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = "";
  loading = false;
  submitted = false;
  constructor(
    public fb: FormBuilder,
    public authService: AuthenticationService,
    public router: Router,
    private alertService: AlertService
  ) {
    this.signupForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
    if (this.isSignedUp) {
      this.router.navigate(["/"]);
    }
  }
  get f() {
    return this.signupForm.controls;
  }

  ngOnInit(): void {}

  registerUser() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }
    this.loading = true;

    this.user = this.signupForm.value;
    var sub = this.authService.signUp(this.user).subscribe(
      (data) => {
        setTimeout(
          () => this.alertService.success("Registration successful", true),
          500
        );
        this.router.navigate(["/login"]);
      },
      (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
    setTimeout(() => {
      sub.unsubscribe();
    }, 2000);
  }
}
