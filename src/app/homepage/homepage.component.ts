import { Component } from '@angular/core';
import german from '../../data/german.json';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  protected content: string[] = []

  constructor() {
    this.content[0] = german.german.goal.heading
    this.content[1] = german.german.goal.goalText
  }

}
