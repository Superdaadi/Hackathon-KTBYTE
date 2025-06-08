import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { NgStyle } from '@angular/common';

import { LangService } from '../../service/lang.service';

declare var google: any;


@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [ NgStyle],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {

  protected id: number = 0

  protected type: number = 0
  public mouseX: number = 0;
  public mouseY: number = 0;

  public isHovering = false;

  @ViewChild('trackArea') trackArea!: ElementRef;


  constructor(public langService: LangService) {
  }

  ngOnInit() {
    this.loadGoogleCharts();
  }

  protected setType(type: number) {
    this.type = type
  }


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isHovering) return;
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
  
  mouseEnter(id: number) {
    this.isHovering = true;
    this.id = id -  1
  }

  mouseLeave() {
    this.isHovering = false;
    console.log("leafe")
  }


  tickBox(id: number) {
    this.langService.saveToLocal(id)
    this.nutrition = 0
    this.mobility = 0
    this.energy = 0
    this.waste = 0
    this.nature = 0
    this.loadGoogleCharts()
  }










  nutrition: number = 0
  mobility: number = 0
  energy: number = 0
  waste: number = 0
  nature: number = 0


  getDataFromLocal(key: number) {
    console.log(key + " übergeben")
    if(key == 1) {
      for (let i = 0; i < 11; i++) {
        if(this.getOneItem(i)) {
          this.nutrition ++
        }
      }
    }
    if(key == 2) {
      for (let i = 11; i < 21; i++) {
        if(this.getOneItem(i)) {
          this.mobility ++
        }
      }
    }

    if(key == 3) {
      for (let i = 21; i < 31; i++) {
        if(this.getOneItem(i)) {
          this.energy ++
        }
      }
    }

    if(key == 4) {
      for (let i = 31; i < 41; i++) {
        if(this.getOneItem(i)) {
          this.waste ++
        }
      }
    }

    if(key == 5) {
      for (let i = 41; i < 51; i++) {
        if(this.getOneItem(i)) {
          this.nature ++
        }
      }
    }

  }



  getOneItem(key: number):boolean {
    const valueFromLocal = localStorage.getItem(key.toString());
    if(valueFromLocal == "true"){
      console.log(key, valueFromLocal)
      return true}
    else
      return false
  }



  loadGoogleCharts() {
    for(let i = 0; i < 6; i++) {
      console.log(i + " das ist i")
      this.getDataFromLocal(i)
    }
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
        [this.langService.tasks[0].cathegory, this.nutrition],
        [this.langService.tasks[1].cathegory, this.mobility],
        [this.langService.tasks[2].cathegory, this.energy],
        [this.langService.tasks[3].cathegory, this.waste],
        [this.langService.tasks[4].cathegory, this.nature]
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
