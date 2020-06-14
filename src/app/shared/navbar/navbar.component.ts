import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { TokenStorageService } from "src/app/services/auth/token-storage.service";
import { User } from "src/assets/class/user";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  fileData: File = null;
  @ViewChild("fileInput")
  fileInput;
  file: File | null = null;

  constructor(
    private tokenStorage: TokenStorageService,
    private appService: AppService
  ) {}

  logout() {
    this.tokenStorage.signOut();
  }
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      var sub = this.appService
        .getUserByUsername(this.tokenStorage.getUsername())
        .subscribe((user) => {
          this.currentUser = user;
          setTimeout(() => {
            sub.unsubscribe();
          }, 2000);
        });
    }
  }
  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }
}
