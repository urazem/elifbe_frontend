import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";

import { VocabularyComponent } from "./main/vocabulary/vocabulary.component";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TrainingModule } from "./main/training/training.module";

import { MyVocabularyComponent } from "./main/vocabulary/my-vocabulary/my-vocabulary.component";
import { DoubleClickDirective } from "./double-click.directive";
import { AuthInterceptor } from "./services/auth/authconfig.interceptor";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlertComponent } from "./components/alert/alert.component";
import { MaterialPageComponent } from "./main/materials/material-page/material-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { MaterialsComponent } from "./main/materials/materials.component";
import { ProfileModule } from "./main/profile/profile.module";
import { MatDialogModule } from "@angular/material/dialog";
import { MyDialogComponent } from "./components/my-dialog/my-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { HomeModule } from "./main/home/home.module";
import { NgxEchartsModule } from "ngx-echarts";
import * as echarts from "echarts";
import { ProgressComponent } from "./components/progress/progress.component";
@NgModule({
  declarations: [
    AppComponent,
    VocabularyComponent,
    MaterialsComponent,
    NavbarComponent,
    FooterComponent,
    MyVocabularyComponent,
    DoubleClickDirective,
    LoginComponent,
    SignupComponent,
    AlertComponent,
    MaterialPageComponent,
    MyDialogComponent,
    ProgressComponent,
  ],
  imports: [
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TrainingModule,
    ProfileModule,
    YouTubePlayerModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    HomeModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [MyDialogComponent],
  exports: [NavbarComponent, FooterComponent, MaterialPageComponent],
})
export class AppModule {}
