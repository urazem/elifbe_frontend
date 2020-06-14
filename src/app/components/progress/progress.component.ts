import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.css"],
})
export class ProgressComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  initOpts = {
    renderer: "svg",
    width: 300,
    height: 300,
  };

  options = {
    color: ["#3398DB"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Слов",
        type: "bar",
        barWidth: "60%",
        data: [5, 6, 13, 2, 34, 11, 2],
      },
    ],
  };
}
