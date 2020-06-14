import { Component, OnInit, HostListener } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VocabularyService } from "src/app/services/vocabulary.service";
import { Word } from "src/assets/class/word";
import { Router } from "@angular/router";

@Component({
  selector: "app-word-translate",
  templateUrl: "./word-translate.component.html",
  styleUrls: ["./word-translate.component.css"],
})
export class WordTranslateComponent implements OnInit {
  correctWord;
  selected;
  enter = false;
  width = 10;
  mySubscription: any;
  buttonText = "не знаю:(";
  resultPhrase = "";
  wrong = false;
  clicked = false;
  words: Word[];
  counter;
  word = {
    id: 1,
    original: "молоко",
    translated: "süt",
    transcription: "[koʊt]",
    description: "кофе с молоком - sütlü qave",
    category: "Напитки",
    sound: "170.00",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/08/11/23/25/glass-1587258_960_720.jpg",
  };

  constructor(private appService: VocabularyService, private router: Router) {}

  ngOnInit() {
    this.counter = 1;
    //с сервера должен прийти ответ: 10 слов из словаря пользов ателя
    this.getWords();
  }

  getWords() {
    this.mySubscription = this.appService.getWords().subscribe((data) => {
      this.words = data;
    });
  }
  answer(w: Word) {
    this.clicked = true;
    if (this.word.original == w.original) {
      this.correctWord = 0;
      this.resultPhrase = "Отлично, так держать)";
    } else {
      this.correctWord = 0;
      this.wrong = true;
      this.resultPhrase = "Неверный ответ";
    }
    this.buttonText = "Далее →";
  }

  next() {
    if (this.counter == 10) {
      this.router.navigate(["/"]);
    } else {
      this.counter += 1;
    }
    this.width += 10;
    this.correctWord = 300;
    this.clicked = false;
    this.wrong = false;
    this.resultPhrase = "";
    this.enter = true;
    this.buttonText = "не знаю:(";
    this.words = [];
    this.mySubscription = this.appService.getW1().subscribe((data) => {
      this.words = data;
    });
    console.log("working");
  }
}
