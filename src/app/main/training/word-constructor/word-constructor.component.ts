import { Component, OnInit } from "@angular/core";
import { VocabularyService } from "src/app/services/vocabulary.service";
import { Word } from "src/assets/class/word";
import { Router } from "@angular/router";

@Component({
  selector: "app-word-constructor",
  templateUrl: "./word-constructor.component.html",
  styleUrls: ["./word-constructor.component.css"],
})
export class WordConstructorComponent implements OnInit {
  correct = false;
  clicked = false;
  originalWord: Word;
  selected;
  newArray = new Array();
  clickedItem = new Array();
  nextCount: number = 0;
  counter: number = 0;
  word: string;
  words: Word[];
  characters;
  displayImage = false;
  myWidth: number = 0;
  constructor(private vocService: VocabularyService, private router: Router) {}

  ngOnInit(): void {
    var sub = this.vocService.getWords().subscribe((data) => {
      this.words = data;
      this.next(this.words);
    });
  }

  click(item) {
    this.clicked = true;
    this.selected = item;

    if (item == this.word[this.counter]) {
      if (this.counter < this.word.length) {
        this.newArray.push(item);
        this.counter += 1;
        this.clickedItem.push(item);
      }
      if (this.newArray.join("") == this.word) {
        this.correct = true;
        this.displayImage = true;
      }
    }
  }

  shuffle(text: string) {
    var characters = text.split("");
    for (var i: number = 1; i < characters.length; i++) {
      let randomIndex: number = Math.floor(Math.random() * characters.length);
      let temp = characters[i];
      characters[i] = characters[randomIndex];
      characters[randomIndex] = temp;
    }
    return characters;
  }

  next(words: Word[]) {
    this.clicked = false;
    this.newArray = [];
    this.counter = 0;
    this.correct = false;
    this.clickedItem = [];
    this.displayImage = false;
    if (this.nextCount < 5) {
      this.myWidth += 20;
      this.characters = this.shuffle(words[this.nextCount].translated);
      this.originalWord = words[this.nextCount];
      this.word = words[this.nextCount].translated;
      this.nextCount += 1;
    } else {
      window.alert("Cool!");
      this.router.navigate(["training"]);
    }
  }

  exit() {
    this.router.navigate(["training"]);
  }
}
