import { Component, OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  constructor() {
  }
  ngOnInit() {

  }
  p: number = 1;
  collection: any[] = [1];
  donutCharts = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Анамнез',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'Чхання', y: 1, color: '#eeeeee' },

          { name: 'Кашель', y: 2, color: '#393e46' },

          { name: 'Блювання', y: 3, color: '#00adb5' },
          { name: 'Діарея', y: 4, color: '#eeeeee' },
          { name: 'Проблеми з психічним здоров\'ям', y: 5, color: '#506ef9' },
        ],
      },
    ],
  });

  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Стан здоров\'я пацієнта'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Здоров\'я пацієнта',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any
    ]
  });

}
