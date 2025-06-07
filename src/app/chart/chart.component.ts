import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit{

  ngOnInit(): void {
    this.loadGoogleCharts();
  }

  loadGoogleCharts(): void {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/charts/loader.js';
    script.onload = () => this.drawChart();
    document.head.appendChild(script);
  }

  drawChart(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      const data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2]
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
