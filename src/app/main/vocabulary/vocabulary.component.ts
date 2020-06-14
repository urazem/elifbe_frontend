import { Component, OnInit } from "@angular/core";
import { VocabularyService } from "src/app/services/vocabulary.service";

import { SetWords } from "src/assets/class/set_words";
import { User } from "src/assets/class/user";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { TokenStorageService } from "src/app/services/auth/token-storage.service";
import { AppService } from "src/app/services/app.service";
import { MatDialog } from "@angular/material/dialog";
import { MyDialogComponent } from "src/app/components/my-dialog/my-dialog.component";

@Component({
  selector: "app-vocabulary",
  templateUrl: "./vocabulary.component.html",
  styleUrls: ["./vocabulary.component.css"],
})
export class VocabularyComponent implements OnInit {
  selectedSet: SetWords;
  clickButton = true;
  value = "block";

  newSet: Observable<any>;
  setsSubscription;
  timerSubscription;
  constructor(
    private vocabService: VocabularyService,
    private appService: AppService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  indexDot = 1;
  dotsClicked = false;
  left = "0px";
  sets: SetWords[];
  userSets: SetWords[];
  user: User;
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.appService
        .getUserByUsername(this.tokenStorage.getUsername())
        .subscribe((user) => {
          this.user = user;
          this.refreshData(this.user.id);
        });

      this.vocabService.getSets().subscribe((data) => {
        this.sets = data;
      });
    }
  }
  private refreshData(id): void {
    this.setsSubscription = this.vocabService
      .getUserSets(id)
      .subscribe((sets) => {
        this.userSets = sets.sets;
        this.subscribeToData();
      });
    // this.unsubscribe(this.setsSubscription);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  private subscribeToData(): void {
    this.timerSubscription.subscribe(() => this.refreshData(this.user.id));
  }

  clickSet(set: SetWords) {
    if (this.check(set)) {
      this.openDialog();
      this.deleteSet(set);
    } else {
      this.addSet(set);
    }
    this.refreshData(this.user.id);
  }

  addSet(set: SetWords) {
    this.vocabService.addSet(set.id, this.user).subscribe({
      next: (value: string) => console.log("next:", value),
      complete: () => console.log("complete"),
      error: (error) => console.log("error", error),
    });
  }

  deleteSet(userSet: SetWords) {
    var sub = this.vocabService.deleteSet(this.user.id, userSet.id).subscribe({
      next: (value: string) => console.log("next:", value),
      complete: () => console.log("complete"),
      error: (error) => console.log("error", error),
    });
    this.unsubscribe(sub);
    this.refreshData(this.user.id);
  }

  myVocablurary() {
    this.router.navigate(["/my-vocabulary"]);
  }
  unsubscribe(sub) {
    setTimeout(() => {
      sub.unsubscribe();
    }, 2000);
  }

  check(p) {
    return this.userSets.some((item) => {
      return item.id === p.id;
    });
  }
  slide(index: any) {
    this.indexDot = index;
    switch (index) {
      case 1: {
        this.left = "0px";
        break;
      }
      case 2: {
        this.left = "-999px";
        break;
      }
      case 3: {
        this.left = "-1998px";
        break;
      }
    }
  }
}
