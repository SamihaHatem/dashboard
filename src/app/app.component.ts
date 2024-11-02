import { Component } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from "ag-charts-community";
import { Color } from 'ag-charts-community/dist/types/src/sparklines-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  pieOptions: AgChartOptions
  barOptions: AgChartOptions
  constructor() {
    this.pieOptions = {
      background: {
        fill: 'transparent',
      },
      padding: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
      },
      theme: {
        palette: {
          fills: ['#02385d', '#17a8e9']
        }
      },
      data: [
        { amount: 10000 },
        { amount: 60000 },
      ],
      series: [
        {
          type: "donut",
          angleKey: "amount",
          innerRadiusRatio: 0.75,

          innerLabels: [
            {
              text: 'Net Profit Margin%',
              spacing: 10,
              color: '#02385d',
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            },
            {
              text: '13.3%',
              spacing: 10,
              fontSize: 30,
              color: '#000000',
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            },
            {
              text: 'Target 12.0%',
              spacing: 10,
              color: '#02385d',
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            },
          ],
          innerCircle: {
            fill: 'transparent',
          },

        },
      ],
    };


    this.barOptions = {
      title: {
        text: "Income and Expenses",
      },
      data: [
        { month: 'Jan', income: 5000, expenses: -3000, avg: 1000 },
        { month: 'Feb', income: 4000, expenses: -3500, avg: 250 },
        { month: 'Mar', income: 4900, expenses: -3900, avg: 3000 },
        { month: 'Apr', income: 4500, expenses: -3500, avg: -2000 },
        { month: 'May', income: 3000, expenses: -2000, avg: 700 },
        { month: 'Jun', income: 3500, expenses: -2200, avg: -20 },
        { month: 'Jul', income: 4400, expenses: -2100, avg: 320 },
        { month: 'Aug', income: 3300, expenses: -2700, avg: 800 },
        { month: 'Sep', income: 1000, expenses: -2600, avg: -1000 },
        { month: 'Oct', income: 5000, expenses: -2400, avg: 560 },
        { month: 'Nov', income: 3500, expenses: -2300, avg: 1040 },
        { month: 'Dec', income: 4000, expenses: -2500, avg: 300 },

      ],
      series: [
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'income',
          yName: 'Total Income',
          stacked: true,
          fill: '#02385d',
          shadow: {
            color: '#808080',
          },
        },
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'expenses',
          yName: 'Total Expenses',
          stacked: true,
          fill: '#17a8e9',
          shadow: {
            color: '#808080',
          },
        },
        {
          type: 'line', // use 'line' series
          xKey: 'month',
          yKey: 'avg',
          yName:'Net Profit',
          showInLegend:true,
          marker:{
            enabled:false
          },
          stroke:'#8adbff',
          strokeWidth: 2,
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
        },
        {
          type: 'number',
          position: 'left',
          title: { text: 'Amount' },
          min: -5000, // Set minimum value to -5000
          max: 6000,  // Set maximum value to 6000
          interval: {
            step: 1000
          },
        },
      ],
      legend: {
        position: 'bottom'
      }
    };
  }
}

