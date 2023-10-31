import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "calcite-components-angular-example";
  sliderValue = 50;

  public isLoading: boolean = true;

  ngOnInit() {
    this.fetch();
  }

  async fetch() {
    await new Promise(r => setTimeout(r, 2000));
    this.isLoading = false;
  }

  onSliderInput(event: Event) {
    const value = (event.target as HTMLCalciteSliderElement).value;
    if (typeof value === "number") {
      this.sliderValue = value;
    }
  }

  clearSliderValue() {
    this.sliderValue = 0;
  }
}
