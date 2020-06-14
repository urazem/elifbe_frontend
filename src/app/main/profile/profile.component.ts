import { Component, OnInit, ViewChild } from "@angular/core";
import { TokenStorageService } from "src/app/services/auth/token-storage.service";
import {
  FormGroup,
  Validators,
  FormControl,
  NgForm,
  FormBuilder,
} from "@angular/forms";

import { User } from "src/assets/class/user";
import { AppService } from "src/app/services/app.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  changeButton = false;
  currentUser: User;
  form: FormGroup;
  formFile: FormGroup;
  fileData: File = null;
  @ViewChild("fileInput")
  fileInput;
  file: File | null = null;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  token;
  selectedFile: File;
  constructor(
    public appService: AppService,
    public tokenService: TokenStorageService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.form = this.formBuilder.group({
      username: [""],
      email: ["", Validators.required],
      firstName: [""],
      lastName: [""],
      age: [""],
    });

    this.token = this.tokenService.getToken();

    if (this.token) {
      this.appService
        .getUserByUsername(this.tokenService.getUsername())
        .subscribe((user) => {
          this.currentUser = user;
          this.form.value.firstName = this.currentUser.firstName;
        });
    }
  }

  ngOnInit() {
    this.formFile = this.formBuilder.group({
      file: [""],
    });
  }
  saveChanges() {
    this.changeButton = false;
    this.currentUser.firstName = this.form.value.firstName;
    this.currentUser.lastName = this.form.value.lastName;
    this.currentUser.age = this.form.value.age;
    console.log(this.currentUser);

    this.appService.saveUserSettings(this.currentUser).subscribe((data) => {
      console.log(data);
    });
  }
  close() {
    this.changeButton = false;
    this.form.reset();
  }
  get f() {
    return this.form.controls;
  }

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFilInput(): void {
    console.log(this.selectedFile);

    const uploadImageData = new FormData();
    uploadImageData.append(
      "imageFile",
      this.selectedFile,
      this.selectedFile.name
    );
    this.httpClient
      .post("http://localhost:8080/image/upload", uploadImageData, {
        observe: "response",
      })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = "Image uploaded successfully";
        } else {
          this.message = "Image not uploaded successfully";
        }
      });
    this.getImage();
  }
  getImage() {
    this.httpClient
      .get("http://localhost:8080/image/get/" + this.imageName)
      .subscribe((res) => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = "data:image/jpeg;base64," + this.base64Data;
      });
  }

  change() {
    this.changeButton = true;
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];

    this.formFile.get("file").setValue(this.file);

    const formData = new FormData();
    formData.append("file", this.formFile.get("file").value);
    let sub = this.appService.saveImage(formData).subscribe(
      (res) => console.log(res),

      (err) => console.log(err)
    );
  }
}
