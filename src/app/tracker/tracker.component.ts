import { Component } from '@angular/core';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {

  protected taskHeadings: string[] = [
    "Energie",
    "Mobilität",
    "Konsum",
    "Ernährung",
    "Wasserverbrauch",
    "CleanUp"
  ];

  protected tasks = [
    { heading: 'Energie', tasks: ['Task 1', 'Task 2', 'Task 3'] },
    { heading: 'Mobilität', tasks: ['BTask 1', 'BTask 2', 'BTask 3'] }
  ]

  protected type: number = 0


  protected setType(type: number) {
    this.type = type
  }



}
