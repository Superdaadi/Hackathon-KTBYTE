import { Component } from '@angular/core';
import { LangService } from '../../service/lang.service';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  constructor(public langService: LangService) {
    }
    
}
