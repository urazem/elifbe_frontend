import { Component, OnInit } from "@angular/core";
import { Word } from "src/assets/class/word";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { VocabularyService } from "src/app/services/vocabulary.service";

@Component({
  selector: "app-my-vocabulary",
  templateUrl: "./my-vocabulary.component.html",
  styleUrls: ["./my-vocabulary.component.css"],
})
export class MyVocabularyComponent implements OnInit {
  constructor(private appService: VocabularyService) {}
  words: Word[];
  currentState = "initial";

  audio: any = new Audio();
  audios: any[];
  audiosource: string = "";

  ngOnInit(): void {
    this.appService.getWords1().subscribe((data) => {
      this.words = data;
    });
  }

  soundPlay(audio) {
    this.currentState = this.currentState === "initial" ? "final" : "initial";
    this.audio.src = audio;
    this.audio.load();
    this.audio.play();
  }
}
