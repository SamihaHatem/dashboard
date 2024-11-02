import { Component } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from "ag-charts-community";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  options: AgChartOptions

  constructor() {
    this.options = {
      data: [
        { asset: "Stocks", amount: 60000 },
        { asset: "Bonds", amount: 40000 },
      ],
      series: [
        {
          type: "donut",
          calloutLabelKey: "asset",
          angleKey: "amount",
          innerRadiusRatio: 0.9,

          innerLabels: [
            {
              text: 'Total Investment',
              fontWeight: 'bold',
            },
            {
              text: '$100,000',
              spacing: 4,
              fontSize: 48,
              color: 'green',
            },
          ],
          innerCircle: {
            fill: '#c9fdc9',
          },

        },
      ],
    };
  }

}
