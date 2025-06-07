import { Component } from '@angular/core';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {


  protected tasks = [
    { heading: 'Energie', tasks: ['Stelle deien Monitor auf Energiesparmodus', 'Verzichte heute auf den Trockner'] },
    { heading: 'Mobilität', tasks: ['Fahre heute alle Wege unter 3km mit dem Fahrrad', 'Nutze heute den ÖPNV anstelle des Autos', 'Plane für nächste woche eine Fahrgemeinschaft'] },
    { heading: 'Konsum', tasks: ['Kaufe heute nichts, dass du nicht wirklich brauchst', 'Verzichte heute auf alle Einwegproduckte'] },
    { heading: 'Wasser', tasks: ['Dusche heute maximal 3 Minuten lang', 'Starte die Waschmaschine nur vollbeladen'] },
    { heading: 'Clean-up', tasks: ['Sammle heute 5 Stücke Müll in der Natur auf', 'Sortiere deine Altbatterien und Elektroschrott - bringe sie zur Sammelstelle'] },
  ]

  protected type: number = 0


  protected setType(type: number) {
    this.type = type
  }



}
