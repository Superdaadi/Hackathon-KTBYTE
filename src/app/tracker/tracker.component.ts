import { Component } from '@angular/core';

import { ChartComponent } from '../chart/chart.component';
import dataDE from '../../data/task-DE.json'
import { AllTask } from './tracker.model';
import { LangService } from '../../service/lang.service';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {


  protected type: number = 0




  constructor(public langService: LangService) {
  }


  protected setType(type: number) {
    this.type = type
  }



}
