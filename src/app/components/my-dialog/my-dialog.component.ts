import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { VocabularyService } from "src/app/services/vocabulary.service";
import { SetWords } from "src/assets/class/set_words";

@Component({
  selector: "app-my-dialog",
  templateUrl: "./my-dialog.component.html",
  styleUrls: ["./my-dialog.component.css"],
})
export class MyDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private vocabService: VocabularyService
  ) {}

  ngOnInit(): void {}

  delete() {
    this.dialogRef.close();
  }
}
