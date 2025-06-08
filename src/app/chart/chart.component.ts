import { Component, OnInit } from '@angular/core';

import { LangService } from '../../service/lang.service';

declare var google: any;

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit{

  nutrition: number = 1


  ngOnInit() {
    this.loadGoogleCharts();
  }

  constructor(public langService: LangService) {}

  getDataFromLocal(key: number):number {
    if(key = 1) {

      for (let i = 0; i > 10; i++) {
        console.log(i);
      }
    }
    const valueFromLocal = localStorage.getItem(key.toString());

    if(valueFromLocal)
      return 1
    else
      return 0
  }



  getOneItem(key: number):boolean {
    const valueFromLocal = localStorage.getItem(key.toString());
    if(valueFromLocal == "true")
      return true
    else
      return false
  }



  loadGoogleCharts() {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/charts/loader.js';
    script.onload = () => this.drawChart();
    document.head.appendChild(script);
  }

  drawChart() {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      const data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        [this.langService.tasks[0].cathegory, this.getDataFromLocal(1)],
        [this.langService.tasks[1].cathegory, 2],
        [this.langService.tasks[2].cathegory, 2],
        [this.langService.tasks[3].cathegory, 2],
        [this.langService.tasks[4].cathegory, 2]
      ]);

      const options = {
        title: '',
        backgroundColor: '#D2E2B0',
        pieHole: 0.4,
        legend: { 
          position: 'bottom'
        },
      };

      const chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    });
  }
}
