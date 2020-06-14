import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[appDoubleClick]",
})
export class DoubleClickDirective {
  click: boolean = false;
  times = 0;
  element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener("click") onClicked() {
    this.click = !this.click;
    if (this.click) {
      console.log(this.element.nativeElement);
    } else {
      console.log("twice click");
    }
  }
}
