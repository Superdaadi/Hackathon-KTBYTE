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
  public lang: string = 'german'


  public tasks: AllTask[]

  public taskId: TaskID[] = []


  constructor() {
    this.tasks = taskDE.german



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
      this.content[11] = data.german.emission1.text
      this.content[12] = data.german.emissionT.text
      this.content[13] = data.german.distance.text
      this.content[14] = data.german.berechnen.text
      this.content[15] = data.german.kraftstoff.text
      this.content[16] = data.german.benzin.text
      this.content[17] = data.german.rechner.text
      this.content[18] = data.german.impressum.text
      this.content[19] = data.german.kontakt.text
      this.content[20] = data.german.überuns.text
      this.content[21] = data.german.punkte.text
      this.content[22] = data.german.übersicht.text
      this.content[23] = data.german.total.text
      this.content[24] = data.german.In.text
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
      this.content[11] = data.english.emission1.text
      this.content[12] = data.english.emissionT.text
      this.content[13] = data.english.distance.text
      this.content[14] = data.english.berechnen.text
      this.content[15] = data.english.kraftstoff.text
      this.content[16] = data.english.benzin.text
      this.content[17] = data.english.rechner.text
      this.content[18] = data.english.impressum.text
      this.content[19] = data.english.kontakt.text
      this.content[20] = data.english.überuns.text
      this.content[21] = data.english.punkte.text
      this.content[22] = data.english.übersicht.text
      this.content[23] = data.english.total.text
      this.content[24] = data.english.In.text
    }

  }


  
}