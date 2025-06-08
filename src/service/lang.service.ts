import { Injectable } from '@angular/core';

import { AllTask, TaskID } from './lang.model';
import taskDE from '../data/task-DE.json'
import taskEN from '../data/task-EN.json'
import data from '../data/language.json';



@Injectable({
  providedIn: 'root'
})

export class LangService {

  public content: string[] = []
  public lang: string = 'english'


  public tasks: AllTask[]

  public taskId: TaskID[] = []


  constructor() {
    this.tasks = taskEN.english



    this.checkLang();

  }

  public getDataFromLocal(key: number): string {
    const valueFromLocal = localStorage.getItem(key.toString());
    if (valueFromLocal)
      return valueFromLocal
    else
      return "false"
  }
  
  public saveToLocal(id: number) {
    const key = id.toString();
    const valueFromLocal = localStorage.getItem(key);
    console.log(valueFromLocal);

    if (valueFromLocal === "true") {
      localStorage.setItem(key, "false");
    } else {
      localStorage.setItem(key, "true");
    }
  }









  public checkLang() {
    if (this.lang == 'german') {
      this.tasks = taskDE.german

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

    else if (this.lang == 'english') {
      this.tasks = taskEN.english

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