import { Component } from '@angular/core';
import data from '../../data/language.json';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  protected content: string[] = []
  protected language: string = 'german';
  constructor() {
    if (this.language == 'german') {
      this.content[0] = data.german.goal.heading
      this.content[1] = data.german.goal.text
      this.content[2] = data.german.funktion.heading
      this.content[3] = data.german.funktion.text
      this.content[4] = data.german.funktion2.text
      this.content[5] = data.german.explaination.text
      this.content[6] = data.german.funktion3.text
      this.content[7] = data.german.about.heading
      this.content[8] = data.german.about.text
      this.content[9] = data.german.david.text
      this.content[10] = data.german.daniel.text
    }
    else if (this.language == 'english') {
      this.content[0] = data.english.goal.heading
      this.content[1] = data.english.goal.text
      this.content[2] = data.english.funktion.heading
      this.content[3] = data.english.funktion.text
      this.content[4] = data.english.funktion2.text
      this.content[5] = data.english.explaination.text
      this.content[6] = data.english.funktion3.text
      this.content[7] = data.english.about.heading
      this.content[8] = data.english.about.text
      this.content[9] = data.english.david.text
      this.content[10] = data.english.daniel.text
    }
  }
  
}
