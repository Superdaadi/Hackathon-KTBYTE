import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {


  protected tasks = [
    { heading: 'Energie', tasks: ['Energiesparmodus aktiviert', 'Verzichte heute auf den Trockner', 'Lüfte heute nur kurz stoßweise', 'Verbringe heute eine Stunde ganz ohne Strom', 'Größten Stromverbraucher im Haushalt prüfen', 'Größten Stromverbraucher im Haushalt prüfen', 'Größten Stromverbraucher im Haushalt prüfen', 'Größten Stromverbraucher im Haushalt prüfen', '2Größten Stromverbraucher im Haushalt prüfen'] },
    { heading: 'Mobilität', tasks: ['Fahre heute alle Wege unter 3km mit dem Fahrrad', 'Nutze heute den ÖPNV anstelle des Autos', 'Plane für nächste woche eine Fahrgemeinschaft'] },
    { heading: 'Konsum&CleanUp', tasks: ['Kaufe heute nichts, dass du nicht wirklich brauchst', 'Verzichte heute auf alle Einwegproduckte', 'Repariere heute ein defektes Teil, statt es zu ersetzen', 'Bring heute Altglas, Papier oder Plastik zum Recycling', 'Schau heute in einen Secondhand-Shop oder Online-Alternativen', 'Teile heute ein Produkt mit jemandem, statt es doppelt zu kaufen', 'Starte heute einen No-Waste-Tag: Produziere so wenig Müll wie möglich'] },
    { heading: 'Wasser', tasks: ['Dusche heute maximal 3 Minuten lang', 'Starte die Waschmaschine nur vollbeladen', 'Nutze beim Zähneputzen kein laufendes Wasser', 'Sammle heute Wasser beim Gemüsewaschen und nutze es für Pflanzen', 'Kontrolliere heute alle Wasserhähne auf Tropfen oder Lecks', 'Gieße deine Pflanzen heute mit Regenwasser oder Restwasser'] },
    { heading: 'Natur&Achtsamkeit', tasks: ['Sammle heute 5 Stücke Müll in der Natur auf', 'Verbringe heute mindestens 45 Minuten in der Natur', 'Pflanze heute etwas - einen Samen, eine Blume oder Kräuter', 'Nimm heute bewusst keine Musik mit nach draußen - höre nur die Natur', 'Lass heute dein Handy zu Hause, wenn du rausgehst', 'Recherchiere heute einen bedrohten Lebensraum in deiner Region', 'Lade heute jemanden zu einem Spaziergang in der Natur ein'] },
    { heading:'Ernährung',task: ['Iss heute komplett vegetarisch','Koche heute mit ausschließlich regionalen Zutaten', 'Verzichte heute auf alle Milchprodukte', 'Verwerte heute Reste aus deinem Kühlschrank', 'Trinke heute nur Leitungswasser', 'Nimm heute dein Essen in einer eigenen Box mit', 'Kaufe heute kein verpacktes Obst oder Gemüse', 'Koche heute ohne Fertigprodukte oder Tiefkühlgerichte']},
    
  ]

  protected type: number = 0


  protected setType(type: number) {
    this.type = type
  }

  


}
