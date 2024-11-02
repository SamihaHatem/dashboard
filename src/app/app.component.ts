import { Component } from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';


  constructor(){
    CanvasJS.addColorSet("greenShades",
      [
      "#17a8e9",
      "#02385d",
      "#2E8B57",
      "#3CB371",
      "#90EE90"                
      ]);
  }
    
  chartOptions = {
    animationEnabled: true,
    colorSet:"greenShades",
    data: [{
      type: "doughnut",
      yValueFormatString: "#,###.##'%'",
      dataPoints: [
        { y: 28, name: "Labour" },
        { y: 10, name: "Legal" },
      ]
    }]
  }
}
