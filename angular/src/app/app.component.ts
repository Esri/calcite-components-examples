import { Component } from '@angular/core';

// Calcite Components
import '@esri/calcite-components/dist/components/calcite-icon';
import '@esri/calcite-components/dist/components/calcite-combobox';
import '@esri/calcite-components/dist/components/calcite-combobox-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Angular";

  fields = [
    {
      "displayText": "Natural Resources",
      "value": "natural-resources"
    },
    {
      "displayText": "Agriculture",
      "value": "agriculture"
    },
    {
      "displayText": "Forestry",
      "value": "forestry"
    },
    {
      "displayText": "Mining",
      "value": "mining"
    },
    {
      "displayText": "Business",
      "value": "business"
    },
    {
      "displayText": "Education",
      "value": "education"
    },
    {
      "displayText": "Utilities",
      "value": "utilities"
    },
    {
      "displayText": "Transportation",
      "value": "transportation"
    }
  ];

  logSelectedFields(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }

}
