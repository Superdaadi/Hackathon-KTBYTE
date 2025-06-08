import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LangService } from '../../service/lang.service';

@Component({
  selector: 'app-co2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './co2.component.html',
  styleUrl: './co2.component.css'
})
export class CO2Component {

  vehicle: string = ""
  distance: number = 0;
  result: number = 0;

  constructor(public langService: LangService) {
  }

  calculateCO2Emission() {
    var emissionFactor = 0;
    if (this.vehicle == "diesel"){
      emissionFactor = 0.159;
    } 
    else if (this.vehicle == "benzin") {
      emissionFactor = 0.120;
    }
    this.result = this.distance * emissionFactor;
  }

}
